'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Verify = ({ params }) => {
    const router = useRouter();
    const [verificationCode, setVerificationCode] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = params.id;

        try {
            const response = await fetch(`http://localhost:5000/users/verifyCode/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ verificationCode: verificationCode }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Xác thực thành công! Bạn có thể đăng nhập ngay bây giờ.');
                setTimeout(() => {
                    router.push('/login');
                }, 1500);
            } else {
                setError(data.error || 'Lỗi! Xác thực không thành công.');
            }
        } catch (error) {
            setError('Xin vui lòng kiểm tra kết nối của bạn!');
        }
    };

    return (
        <div className="main-container">
            <div className="form-container">
                {error && <p className="alert alert-danger">{error}</p>}
                {success && <p className="alert alert-success">{success}</p>}
                <form className="form" id="form-1" onSubmit={handleSubmit}>
                    <h3 className="heading">Xác thực tài khoản!</h3>
                    <p className="desc">Mã xác thực đã được gửi tới email của bạn</p>
                    <div className="form-group">
                        <input
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            id="verificationCode"
                            name="verificationCode"
                            type="text"
                            className="form-control"
                            placeholder="Nhập mã xác thực"
                        />
                        <span className="form-message"></span>
                    </div>
                    <div className="router-page-btn col">
                        <button className="form-submit" type="submit">
                            Gửi đi
                        </button>
                    </div>
                </form>
            </div>
            <div className="site-bottom"></div>
        </div>
    );
};

export default Verify;
