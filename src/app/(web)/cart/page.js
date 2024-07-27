"use client";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart, updateCartItemQuantity } from "@/redux/slices/cartslice";
import { useMemo } from "react";

function Cart() {
    const cartItems = useSelector((state) => state.cart?.items) || [];
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId, size) => {
        dispatch(removeFromCart({ _id: productId, size }));
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity - 1, size: item.size }));
        }
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity + 1, size: item.size }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
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
                            <div className="cart-product" key={`${item._id}-${item.size}`}>
                                <a href="#" className="cart-product-img">
                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`} alt="Product Image" />
                                </a>
                                <div className="cart-product-info">
                                    <div className="cart-product-wrapper">
                                        <Link href={`/products/${item.slug}`} className="cart-product-name">
                                            {item.name}
                                        </Link>
                                        <a href="#" className="cart-product-size">
                                            Size: {item.size}
                                        </a>
                                    </div>
                                    <button
                                        className="cart-product-btndel"
                                        onClick={() => handleRemoveFromCart(item._id, item.size)}
                                        style={{ color: "red" }}
                                    >
                                        Xóa
                                    </button>
                                </div>
                                <div className="cart-product-price grid-cart">
                                    {item.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
