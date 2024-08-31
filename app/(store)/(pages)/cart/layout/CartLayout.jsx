'use client';
import Link from 'next/link';
import React from 'react';

import Breadcrumbs from './BreadCrumb';

function CartLayout({ children, totalAmount }) {
    return (
        <div className="main-container">
            <Breadcrumbs />

            <div className="cart-container">
                <div className="cart">
                    <div className="cart-header">
                        <span>Thông tin sản phẩm</span>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                    </div>

                    <div className="cart-body">
                        {children}

                        <div className="cart-footer">
                            <Link href="/products" className="cart-footer__return">
                                <i className="fa-solid fa-arrow-left"></i> Tiếp tục mua hàng
                            </Link>
                            <div className="cart-footer__sub-total">
                                <div className="cart-footer__head">
                                    <span className="cart-footer__head-title">Tổng tiền:</span>
                                    <span className="cart-price">
                                        {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                    </span>
                                </div>
                                <Link href="/checkout" className="btn-checkout">
                                    Thanh toán
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;
