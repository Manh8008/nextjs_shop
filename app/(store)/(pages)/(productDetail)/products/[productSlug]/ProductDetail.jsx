'use client'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import classNames from 'classnames/bind'

import { Button, LoadingSkeleton, ToastError } from '@/components/ui'
import useFetch from '@/hooks/useFetch'
import useAddCart from '@/hooks/useAddCart'
import styles from './ProductDetail.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'

const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Detail({ params }) {
    const { data: product, error, loading } = useFetch(`${backendUrl}/products/${params.productSlug}`)
    const { quantity, setQuantity, setSize, errorMessage, handleAddToCart } = useAddCart(product)

    const handleIncreaseQuantity = () => setQuantity(quantity + 1)
    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    if (error) return <div>Failed to load</div>
    if (loading) return <LoadingSkeleton />

    return (
        <>
            <form onSubmit={handleAddToCart}>
                <div className={cx('wrapper')}>
                    <div className={gx('grid wide')}>
                        <div className={cx('detail')}>
                            <div className={gx('row')}>
                                <div className={gx('c-6')}>
                                    <div className={cx('gallery')}>
                                        <div className={cx('gallery-big')}>
                                            <Image
                                                className={cx('image')}
                                                width={530}
                                                height={795}
                                                quality={100}
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                alt="Product Image"
                                            />
                                        </div>

                                        <div className={cx('gallery-small')}>
                                            <div className={cx('prev-btn-wrap')}>
                                                <FontAwesomeIcon className={cx('btn-icon')} icon={faAngleDown} />
                                            </div>
                                            <div className={cx('next-btn-wrap')}>
                                                <FontAwesomeIcon className={cx('btn-icon')} icon={faAngleDown} />
                                            </div>

                                            <div className={cx('swiper-container')}>
                                                <div className={cx('swiper-slide')}>
                                                    <Image
                                                        className={cx('image')}
                                                        width={100}
                                                        height={150}
                                                        quality={100}
                                                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                        alt="Product Image"
                                                    />
                                                    <div />

                                                    <div className={cx('swiper-slide')}>
                                                        <Image
                                                            className={cx('image')}
                                                            width={100}
                                                            height={150}
                                                            quality={100}
                                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                            alt="Product Image"
                                                        />
                                                        <div />

                                                        <div className={cx('swiper-slide')}>
                                                            <Image
                                                                className={cx('image')}
                                                                width={100}
                                                                height={150}
                                                                quality={100}
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                                alt="Product Image"
                                                            />
                                                            <div />
                                                        </div>

                                                        <div className={cx('swiper-slide')}>
                                                            <Image
                                                                className={cx('image')}
                                                                width={100}
                                                                height={150}
                                                                quality={100}
                                                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                                alt="Product Image"
                                                            />
                                                            <div />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={gx('c-6')}>
                                    <div className={cx('content')}>
                                        <h1 className={cx('name')}>{product.name}</h1>

                                        <div className={cx('sub-info')}>
                                            <p>
                                                SKU:
                                                <span>57E3930</span>
                                            </p>
                                        </div>

                                        <div>
                                            <div className={cx('price')}>
                                                {product.price && product.price.toLocaleString()}đ
                                            </div>
                                        </div>

                                        <div className={cx('detail-color')}>
                                            <p>Màu sắc: Trắng</p>
                                        </div>

                                        <div className={cx('size-selector')}>
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_s"
                                                value="S"
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                            <label htmlFor="size_s">S</label>

                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_m"
                                                value="M"
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                            <label htmlFor="size_m">M</label>

                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_l"
                                                value="L"
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                            <label htmlFor="size_l">L</label>

                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_xl"
                                                value="XL"
                                                onChange={(e) => setSize(e.target.value)}
                                            />
                                            <label htmlFor="size_xl">XL</label>
                                        </div>

                                        <div className={cx('quantity')}>
                                            <p>Số lượng</p>

                                            <div className={cx('cart-product-quantity')}>
                                                <input
                                                    className={cx('price-quantity-input')}
                                                    min="1"
                                                    type="number"
                                                    value={quantity}
                                                />

                                                <div
                                                    className={cx('price-quantity', 'quantity-minus')}
                                                    onClick={handleDecreaseQuantity}
                                                >
                                                    -
                                                </div>

                                                <div
                                                    className={cx('price-quantity', 'quantity-plus')}
                                                    onClick={handleIncreaseQuantity}
                                                >
                                                    +
                                                </div>
                                            </div>
                                        </div>

                                        <div className={cx('detail-option')}>
                                            <Button primary>Thêm vào giỏ</Button>
                                            <Button outline href={'/checkout'}>
                                                Mua hàng
                                            </Button>

                                            <Button outline className={cx('heart-btn')}>
                                                <FontAwesomeIcon icon={faHeart} />
                                            </Button>
                                        </div>

                                        <div className={cx('description')}>{product.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastError message={errorMessage} />
        </>
    )
}

export default Detail
