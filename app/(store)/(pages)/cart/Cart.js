'use client';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import Image from 'next/image';

import { removeFromCart, updateCartItemQuantity } from '../../../redux/slices/cartslice';
import { CartLayout } from './layout';

function Cart() {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart?.items);
    const memoizedCartItems = useMemo(() => {
        return cartItems || [];
    }, [cartItems]);

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

    const handleChangeQuantity = (e) => {
        dispatch(
            updateCartItemQuantity({
                _id: item._id,
                quantity: parseInt(e.target.value),
                size: item.size,
            }),
        );
    };

    const totalAmount = useMemo(
        () => memoizedCartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        [memoizedCartItems],
    );

    return (
        <CartLayout totalAmount={totalAmount}>
            {memoizedCartItems.map((item) => (
                <div className="cart-product" key={item._id}>
                    <a href="" className="cart-product-img">
                        <Image
                            width={500}
                            height={98}
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                            alt={item.name}
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
                            <button onClick={() => handleRemoveFromCart(item._id, item.size)} style={{ color: 'red' }}>
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
                                onChange={handleChangeQuantity}
                            />
                            <a
                                onClick={() => handleIncreaseQuantity(item)}
                                className="price-quantity price-quantity-plus"
                            >
                                +
                            </a>
                        </div>

                        <div className="cart-product-price grid-cart">
                            <span className="cart-price">{(item.price * item.quantity).toLocaleString()} VND</span>
                        </div>
                    </div>
                </div>
            ))}
        </CartLayout>
    );
}

export default Cart;
