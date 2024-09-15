import { Button } from '@/components/ui'
import classNames from 'classnames/bind'
import styles from './CartSummary.module.scss'

const cx = classNames.bind(styles)

function CartSummary({ totalAmount, productQuantity }) {
    const shippingFee = 38000
    const temporaryTotal = totalAmount + shippingFee

    return (
        <div className={cx('cart-summary')}>
            <div id="box_product_total">
                <div className={cx('cart-summary__overview')}>
                    <h3>Tóm tắt đơn hàng</h3>
                    <div className={cx('cart-summary__overview__item')}>
                        <p>Tổng sản phẩm</p>
                        <p>{productQuantity}</p>
                    </div>
                    <div className={cx('cart-summary__overview__item')}>
                        <p>Tổng tiền hàng</p>
                        <p>
                            {totalAmount.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            })}
                        </p>
                    </div>
                    <div className={cx('cart-summary__overview__item')}>
                        <p>Phí vận chuyển</p>
                        <p>
                            {shippingFee.toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            })}
                        </p>
                    </div>
                    <div className={cx('cart-summary__overview__item')}>
                        <p>Tạm tính</p>
                        <p>
                            <b>
                                {temporaryTotal.toLocaleString('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                })}
                            </b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSummary
