'use client';
import Button from '@/app/(store)/components/Button';
import Link from 'next/link';
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './CartLayout.Module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';
const gx = classNames.bind(gridStyles);

const cx = classNames.bind(styles); // Bind the styles

function CartLayout({ children, totalAmount }) {
    return (
        <div className={cx('wrapper')}>
            <div className={gx('grid wide')}>
                <h2 class="cart-title">Giỏ hàng của bạn</h2>
                <div className={gx('row no-gutters')}>
                    <div className={gx('c-8')}>
                        <div className={cx('cart-list')}>
                            <div className={cx('cart-header')}>
                                <span>Tên sản phẩm</span>
                                <span>Đơn giá</span>
                                <span>Số lượng</span>
                                <span>Thành tiền</span>
                                <span></span>
                            </div>

                            <div className={cx('cart-body')}>
                                {children}

                                <div className={cx('cart-footer')}>
                                    <Button outline large href="/">
                                        <FontAwesomeIcon icon={faArrowLeft} /> Tiếp tục mua hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={gx('c-4')}>
                        <div className={cx('cart-summary')}>
                            <div id="box_product_total">
                                <div className={cx('cart-summary__overview')}>
                                    <h3>Tóm tắt đơn hàng</h3>
                                    <div className={cx('cart-summary__overview__item')}>
                                        <p>Tổng sản phẩm</p>
                                        <p>3</p>
                                    </div>
                                    <div className={cx('cart-summary__overview__item')}>
                                        <p>Tổng tiền hàng</p>
                                        <p>
                                            {totalAmount.toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            })}
                                        </p>
                                    </div>
                                    <div className={cx('cart-summary__overview__item')}>
                                        <p>Phí vận chuyển</p>
                                        <p>38.000 đ</p>
                                    </div>
                                    <div className={cx('cart-summary__overview__item')}>
                                        <p>Tạm tính</p>
                                        <p>
                                            <b>
                                                {totalAmount.toLocaleString('vi-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                })}
                                            </b>
                                        </p>
                                    </div>

                                    <Button href="/checkout" primary className={cx('btn-order')}>
                                        Đặt hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartLayout;
