'use client'
import Link from 'next/link'
import { NewProduct } from '@/components/home'

function FavoriteProducts() {
    return (
        <div className="main-container">
            <div className="grid wide">
                <div className="grid__row">
                    <div className="c-2">
                        <div className="sub-action">
                            <div className="top-action">
                                <div className="order-sidemenu__user" style={{ paddingBottom: 20, marginTop: 30 }}>
                                    <div className="order-sidemenu__user-avatar"></div>
                                    <div className="order-sidemenu__user-name">
                                        <p>{'Tên người dùng'}</p>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <Link href="/accountInfo">
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
    )
}

export default FavoriteProducts
