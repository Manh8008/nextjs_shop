'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import { logout } from '@/app/redux/slices/userSlice';
import styles from './HeaderUser.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';

const cx = classNames.bind(styles);
const gx = classNames.bind(gridStyles);

function UserHeader() {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        setShowAccountMenu(false);
        router.push('/');
    };

    const toggleAccountMenu = () => {
        if (userInfo) {
            setShowAccountMenu(!showAccountMenu);
        } else {
            router.push('/login');
        }
    };

    return (
        <div className={cx('header__user')}>
            <div className={cx('user-icon', gx('col'))} onClick={toggleAccountMenu}>
                <FontAwesomeIcon icon={faUser} />
            </div>
            {showAccountMenu && (
                <div className={cx('sub-action')}>
                    <div className={cx('top-action')}>
                        <a className={cx('icon')} href="#">
                            <h3>Tài khoản của tôi</h3>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <a href="/accountInfo">
                                <i className="accountInfo-icon fa-regular fa-user"></i>
                                Thông tin tài khoản
                            </a>
                        </li>

                        {userInfo?.role === 'admin' && (
                            <li>
                                <a href="/admin">
                                    <i className="fa-solid fa-lock"></i>
                                    Trang quản trị
                                </a>
                            </li>
                        )}

                        <li>
                            <a href="#">
                                <i className="fa-solid fa-rotate-right"></i>
                                Quản lý đơn hàng
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-location-dot"></i>
                                Sổ địa chỉ
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-regular fa-heart"></i>
                                Sản phẩm yêu thích
                            </a>
                        </li>
                        <li>
                            <a onClick={handleLogout}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default UserHeader;
