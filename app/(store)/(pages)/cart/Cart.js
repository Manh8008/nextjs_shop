'use client';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import classNames from 'classnames/bind';

import { removeFromCart, updateCartItemQuantity } from '../../../redux/slices/cartslice';
import CartLayout from './layout';
import gridStyles from '@/app/assets/styles/grid.module.scss';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const gx = classNames.bind(gridStyles);
const cx = classNames.bind(styles);

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

    const handleChangeQuantity = (e, item) => {
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
            <div className={cx('cart-list', gx('row'))}>
                <div className={gx('c-12')}>
                    {memoizedCartItems.map((item) => (
                        <div className={cx('cart-item')} key={item._id}>
                            <a href="" className={cx('cart-img')}>
                                <Image
                                    width={150}
                                    height={215}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                                    alt={item.name}
                                />
                            </a>
                            <div className={cx('cart-content')}>
                                <div className={cx('cart-info')}>
                                    <a href="" className={cx('cart-info-title')}>
                                        {item.name}
                                    </a>
                                    <a href="" className={cx('cart-info-size')}>
                                        Size: {item.size}
                                    </a>
                                </div>
                                <div className={cx('cart-product-price')}>
                                    <span>{item.price.toLocaleString()} VND</span>
                                </div>

                                <div className={cx('cart-product-quantity')}>
                                    <input
                                        className={cx('price-quantity-input')}
                                        min="1"
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => handleChangeQuantity(e, item)}
                                    />

                                    <div
                                        onClick={() => handleDecreaseQuantity(item)}
                                        className={cx('price-quantity', 'quantity-minus')}
                                    >
                                        -
                                    </div>

                                    <div
                                        onClick={() => handleIncreaseQuantity(item)}
                                        className={cx('price-quantity', 'quantity-plus')}
                                    >
                                        +
                                    </div>
                                </div>

                                <div className={cx('cart-product-price')}>
                                    <span>{(item.price * item.quantity).toLocaleString()} VND</span>
                                </div>

                                <div
                                    className={cx('cart-delete')}
                                    onClick={() => handleRemoveFromCart(item._id, item.size)}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CartLayout>
    );
}

export default Cart;
