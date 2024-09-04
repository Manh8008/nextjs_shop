'use client';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from '@/app/redux/slices/cartslice';
import styles from './CartHeader.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';

const cx = classNames.bind(styles);
const gx = classNames.bind(gridStyles);

function CartHeader() {
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId, size) => {
        dispatch(removeFromCart({ _id: productId, size: size }));
    };

    return (
        <div className={cx('cart')}>
            <div className={cx('cart-wrap')}>
                <a href="/cart" className={gx('col')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </a>
                <span className={cx('notice')}>{cartCount}</span>
                <div className={cx('cart-list')}>
                    <h4 className={cx('cart-heading')}>Sản phẩm đã thêm</h4>
                    <ul className={cx('list-item')}>
                        {cartItems.map((item) => (
                            <li className={cx('item')} key={`${item._id}-${item.size}`}>
                                <Image
                                    width={35}
                                    height={42}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                                    alt=""
                                    className={cx('img')}
                                />
                                <div className={cx('item-info')}>
                                    <div className={cx('item-head')}>
                                        <h5 className={cx('item-name')}>{item.name}</h5>
                                        <div className={cx('item-price-wrap')}>
                                            <span className={cx('item-price')}>{item.price}</span>
                                            <span className={cx('item-multiply')}>x</span>
                                            <span className={cx('item-qnt')}>{item.quantity}</span>
                                        </div>
                                    </div>
                                    <div className={cx('item-body')}>
                                        <span className={cx('item-des')}>Phân loại: {item.categorySlug}</span>
                                        <span
                                            className={cx('remove')}
                                            onClick={() => handleRemoveFromCart(item._id, item.size)}
                                        >
                                            Xóa
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            float: 'left',
                                        }}
                                        className={cx('item-des')}
                                    >
                                        Size: {item.size}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <a href="checkout" className={cx('btn--large', 'btn-check-out')}>
                        Thanh Toán
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CartHeader;
