'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AccountInfo = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('userInfo')).token;

                const response = await fetch('http://localhost:5000/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Lỗi xảy ra khi lấy thông tin người dùng');
                }

                const data = await response.json();

                console.log('User Data:', data);

                setUser(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchUserProfile();
    }, []);

    return (
        <div className="main-container">
            <div className="register-form grid wide">
                <div className="grid__row">
                    <div className="c-2">
                        <div className="sub-action">
                            <div className="top-action">
                                <div className="order-sidemenu__user" style={{ paddingBottom: 20, marginTop: 30 }}>
                                    <div className="order-sidemenu__user-avatar">
                                        <Image
                                            width={500}
                                            height={50}
                                            src={
                                                user?.avatar ||
                                                'https://pubcdn.ivymoda.com/ivy2//images/v2/assets/user-avatar-placeholder.png'
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="order-sidemenu__user-name">
                                        <p>{user?.username || 'Tên người dùng'}</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <Link href="/info">
                                        <i className="fa-regular fa-user"></i>Thông tin tài khoản
                                    </Link>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-solid fa-rotate-right"></i>Quản lý đơn hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-solid fa-location-dot"></i>Sổ địa chỉ
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa-regular fa-heart"></i>Sản phẩm yêu thích
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="c-10">
                        <form className="form grid__row" id="form-1">
                            <div className="c-12">
                                <div className="order-block__title">
                                    <h2>TÀI KHOẢN CỦA TÔI</h2>
                                </div>
                                <p className="alert alert-primary">
                                    Vì chính sách an toàn thẻ, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng
                                    liên hệ CSKH 0865587127 để được hỗ trợ
                                </p>
                                <div className="grid__row">
                                    <div className="c-6">
                                        <div className="form-group col">
                                            <label htmlFor="username" className="form-label">
                                                Tên tài khoản:
                                            </label>
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                defaultValue={user?.username || ''}
                                                placeholder="Họ tên..."
                                                className="form-control"
                                                disabled
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
                                                id="email"
                                                name="email"
                                                type="text"
                                                defaultValue={user?.email || ''}
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
                                                id="dateOfBirth"
                                                name="dateOfBirth"
                                                type="text"
                                                defaultValue={user?.dateOfBirth || ''}
                                                className="form-control"
                                                disabled
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
                                                id="gender"
                                                name="gender"
                                                className="form-control"
                                                value={user?.gender || ''}
                                                onChange={(e) => setGender(e.target.value)}
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
                                                id="address"
                                                name="address"
                                                type="text"
                                                value={user?.address || ''}
                                                onChange={(e) => setAddress(e.target.value)}
                                                placeholder="Địa chỉ..."
                                                className="form-control"
                                            />
                                            <span className="form-message"></span>
                                        </div>
                                    </div>
                                    <div className="c-5" style={{ marginLeft: 23 }}>
                                        <div className="grid__row">
                                            <div className="c-6">
                                                <button className="btn btn--large" type="submit">
                                                    Cập nhật
                                                </button>
                                            </div>
                                            <div className="c-6">
                                                <Link
                                                    href="/changepass"
                                                    className="btn btn--large btn--outline btn-outline-hover"
                                                >
                                                    Đổi mật khẩu
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="site-bottom"></div>
        </div>
    );
};

export default AccountInfo;
