'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const validateForm = () => {
        if (!username) return 'Lỗi! Vui lòng nhập Họ Tên';
        if (!email) return 'Lỗi! Vui lòng nhập Email';
        if (!phone) return 'Lỗi! Vui lòng nhập Số Điện thoại';
        if (!/\S+@\S+\.\S+/.test(email)) return 'Lỗi! Email không hợp lệ';
        if (!password) return 'Lỗi! Vui lòng nhập mật khẩu độ dài từ 7 tới 32 ký tự';
        if (password.length < 7 || password.length > 32) return 'Lỗi! Vui lòng nhập mật khẩu độ dài từ 7 tới 32 ký tự';
        if (password !== confirmPassword) return 'Lỗi! Mật khẩu không khớp';
        if (!dateOfBirth) return 'Lỗi! Vui lòng nhập Ngày sinh nhật';
        if (!address) return 'Lỗi! Vui lòng nhập Địa chỉ';
        if (!termsAccepted) return 'Lỗi! Vui lòng đồng ý với các điều khoản của IVY moda.';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = { phone, email, password, username, address, dateOfBirth, gender };

        const errorMessage = validateForm();
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/users/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            console.log(data);

            if (response.ok) {
                setSuccess('Đăng kí thành công');
                router.push(`/verify/${data.userId}`);
            } else {
                setError(data.error || 'Lỗi! Email đã có người sử dụng rồi');
            }
        } catch (error) {
            setError('Xin vui lòng nhập đầy đủ thông tin!');
        }
    };

    return (
        <div className="main-container">
            <div className="register-form grid wide">
                {error && <p className="alert alert-danger">{error}</p>}
                {success && <p className="alert alert-success">{success}</p>}
                <form onSubmit={handleSubmit} className="form grid__row" id="form-1">
                    <div className="c-6">
                        <h3 className="heading">Thông tin khách hàng</h3>
                        <div className="grid__row">
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="username" className="form-label">
                                        Tên tài khoản:
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Họ tên..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="email" className="form-label">
                                        Email:
                                    </label>
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Email..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="dateOfBirth" className="form-label">
                                        Ngày sinh:
                                    </label>
                                    <input
                                        value={dateOfBirth}
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        placeholder="Ngày sinh..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="gender" className="form-label">
                                        Giới tính:
                                    </label>
                                    <select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        id="gender"
                                        name="gender"
                                        className="form-control"
                                    >
                                        <option value="">Chọn giới tính</option>
                                        <option value="male">Nam</option>
                                        <option value="female">Nữ</option>
                                        <option value="other">Khác</option>
                                    </select>
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-12">
                                <div className="form-group col">
                                    <label htmlFor="address" className="form-label">
                                        Địa chỉ:
                                    </label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Địa chỉ..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-12">
                                <div className="form-group col">
                                    <label htmlFor="phone" className="form-label">
                                        Số điện thoại:
                                    </label>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder="Số điện thoại..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="c-6">
                        <h3 className="heading">Thông tin mật khẩu</h3>
                        <div className="form-group col">
                            <label htmlFor="password" className="form-label">
                                Mật khẩu:
                            </label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Mật khẩu..."
                                className="form-control"
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group col">
                            <label htmlFor="confirmPassword" className="form-label">
                                Nhập lại mật khẩu:
                            </label>
                            <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                className="form-control"
                                placeholder="Nhập lại mật khẩu..."
                            />
                            <span className="form-message"></span>
                        </div>
                        <div className="form-group col">
                            <input
                                value={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.value)}
                                type="checkbox"
                                id="terms"
                                name="terms"
                            />
                            <label htmlFor="terms">
                                Đồng ý với các <Link href="/terms">điều khoản</Link> của IVY
                            </label>
                        </div>

                        <div className="router-page-btn col">
                            <button className="form-submit" type="submit">
                                Đăng ký
                            </button>
                            <Link className="turn-to-page-login" href="/login">
                                Bạn đã có tài khoản ?
                            </Link>
                        </div>
                    </div>
                </form>
            </div>

            <div className="site-bottom"></div>
        </div>
    );
};

export default Register;
