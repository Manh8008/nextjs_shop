'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';

import Input from '@/app/(store)/components/Input';
import Button from '@/app/(store)/components/Button';
import gridStyles from '@/app/assets/styles/grid.module.scss';
import styles from './Verify.module.scss';

const cx = classNames.bind(styles);
const gx = classNames.bind(gridStyles);

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

            if (verificationCode === '') {
                setError('Lỗi! Vui lòng nhập mã xác thực.');
            }

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
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <h3 className={cx('title')}>Xác thực tài khoản!</h3>
                {error && <p className="alert alert-danger">{error}</p>}
                {success && <p className="alert alert-success">{success}</p>}
                <p className={cx('desc')}>Mã xác thực đã được gửi tới email của bạn</p>
                <div className={gx('row')}>
                    <div className={gx('c-9')}>
                        <Input
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            id="verificationCode"
                            name="verificationCode"
                            type="text"
                            placeholder="Nhập mã xác thực"
                        />
                    </div>
                    <div className={cx('button', gx('c-3'))}>
                        <Button primary>Gửi đi</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Verify;
