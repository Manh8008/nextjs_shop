'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NewProduct } from '../../components';

function favoriteProducts() {
    return (
        <div className="main-container">
            <div className="grid wide">
                <div className="grid__row">
                    <div className="c-2">
                        <div className="sub-action">
                            <div className="top-action">
                                <div className="order-sidemenu__user" style={{ paddingBottom: 20, marginTop: 30 }}>
                                    <div className="order-sidemenu__user-avatar">
                                        <Image
                                            width={1800}
                                            height={480}
                                            src={
                                                'https://pubcdn.ivymoda.com/ivy2//images/v2/assets/user-avatar-placeholder.png'
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="order-sidemenu__user-name">
                                        <p>{'Tên người dùng'}</p>
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
                        <NewProduct />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default favoriteProducts;
