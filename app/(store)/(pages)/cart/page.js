'use client';
import Link from 'next/link';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItemQuantity } from '../../../redux/slices/cartslice';
import { useMemo } from 'react';

function Cart() {
    const cartItems = useSelector((state) => state.cart?.items) || [];
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId, size) => {
        dispatch(removeFromCart({ _id: productId, size: size }));
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity - 1, size: item.size }));
        }
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity + 1, size: item.size }));
    };

    const total = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.quantity, 0), [cartItems]);

    return (
        <div className="main-container">
            <section className="bread-crumb">
                <div className="cart-container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a className="breadcrumb-item__link" href="">
                                Trang chủ
                            </a>
                            <span className="breadcrumb-icon">
                                <i className="fa-solid fa-angle-right"></i>
                            </span>
                        </li>
                        <li className="breadcrumb-item">
                            <a className="breadcrumb-item__link" href="">
                                Giỏ hàng
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="cart-container">
                <div className="cart">
                    <div className="cart-header">
                        <span>Thông tin sản phẩm</span>
                        <span>Đơn giá</span>
                        <span>Số lượng</span>
                        <span>Thành tiền</span>
                    </div>

                    <div className="cart-body">
                        {cartItems.map((item) => (
                            <div className="cart-product" key={item._id}>
                                <a href="" className="cart-product-img">
                                    <img
                                        className=""
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                                        alt="Product 1"
                                    />
                                </a>
                                <div className="cart-product-info">
                                    <div className="cart-product-wapper">
                                        <a href="" className="cart-product-name">
                                            {item.name}
                                        </a>
                                        <a href="" className="cart-product-size">
                                            Size: {item.size}
                                        </a>
                                        <button
                                            onClick={() => handleRemoveFromCart(item._id, item.size)}
                                            style={{ color: 'red' }}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                    <div className="cart-product-price grid-cart">
                                        <span className="cart-price">{item.price.toLocaleString()} VND</span>
                                    </div>

                                    <div className="cart-product-quantity grid-cart">
                                        <a
                                            onClick={() => handleDecreaseQuantity(item)}
                                            className="price-quantity price-quantity-minus"
                                        >
                                            -
                                        </a>
                                        <input
                                            className="price-quantity-input"
                                            min="1"
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                dispatch(
                                                    updateCartItemQuantity({
                                                        _id: item._id,
                                                        quantity: parseInt(e.target.value),
                                                        size: item.size,
                                                    }),
                                                )
                                            }
                                        />
                                        <a
                                            onClick={() => handleIncreaseQuantity(item)}
                                            className="price-quantity price-quantity-plus"
                                        >
                                            +
                                        </a>
                                    </div>

                                    <div className="cart-product-price grid-cart">
                                        <span className="cart-price">
                                            {(item.price * item.quantity).toLocaleString()} VND
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="cart-footer">
                            <Link href="/products" className="cart-footer__return">
                                <i className="fa-solid fa-arrow-left"></i> Tiếp tục mua hàng
                            </Link>
                            <div className="cart-footer__sub-total">
                                <div className="cart-footer__head">
                                    <span className="cart-footer__head-title">Tổng tiền:</span>
                                    <span className="cart-price">
                                        {total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
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

export default Cart;
