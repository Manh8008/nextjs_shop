'use client'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'

import { CartList, CartSummary } from '@/components/shared'
import { Button } from '@/components/ui'
import gridStyles from '@/assets/styles/grid.module.scss'
import styles from './Cart.module.scss'

const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

function Cart() {
    const cartItems = useSelector((state) => state.cart?.items)
    const productQuantity = cartItems.length

    const memoizedCartItems = useMemo(() => cartItems || [], [cartItems])

    const totalAmount = useMemo(
        () => memoizedCartItems.reduce((total, item) => total + item.price * item.quantity, 0),
        [memoizedCartItems]
    )

    return (
        <div className={cx('wrapper')}>
            <div className={gx('grid wide')}>
                <h2 className={cx('cart-title')}>Giỏ hàng của bạn</h2>
                <div className={gx('row no-gutters')}>
                    <div className={gx('c-8')}>
                        <div className={cx('cart-list')}>
                            <div className={cx('cart-body')}>
                                <CartList memoizedCartItems={memoizedCartItems} />

                                <Button outline large href="/">
                                    <FontAwesomeIcon icon={faArrowLeft} /> Tiếp tục mua hàng
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className={gx('c-4')}>
                        <CartSummary totalAmount={totalAmount} productQuantity={productQuantity} />
                        <Button href="/checkout" primary fullWidth>
                            Đặt hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
