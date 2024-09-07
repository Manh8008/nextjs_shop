'use client';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import useFetch from '@/app/hooks/useFetch';
import useAddCart from '@/app/hooks/useAddCart';
import { ErrorMessage } from '@/app/(store)/components/ErrorMessage';
import styles from './ProductDetail.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';
import Button from '@/app/(store)/components/Button';

const gx = classNames.bind(gridStyles);
const cx = classNames.bind(styles);

function Detail({ params }) {
    const { data: product, error, loading } = useFetch(`http://localhost:5000/products/${params.productSlug}`);
    const { quantity, setQuantity, setSize, errorMessage, handleAddToCart } = useAddCart(product);

    if (error) return <div>Failed to load</div>;
    if (loading) return <h2>Loading...</h2>;

    return (
        <>
            <form onSubmit={handleAddToCart}>
                <div className={cx('wrapper')}>
                    <div className={gx('grid wide')}>
                        <div className={cx('detail')}>
                            <div className={gx('row')}>
                                <div className={gx('c-6')}>
                                    <div className={cx('image-wrap')}>
                                        <Image
                                            className={cx('image')}
                                            width={1500}
                                            height={1000}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                            alt="Product Image"
                                        />
                                    </div>
                                </div>
                                <div className={gx('c-6')}>
                                    <div className={cx('content')}>
                                        <h1 className={cx('name')}>{product.name}</h1>

                                        <div className={cx('detail_sub-info')}>
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

                                        <div className={cx('quantity-container')}>
                                            <label htmlFor="quantity">Số lượng</label>
                                            <input
                                                type="number"
                                                name="quantity"
                                                id="quantity"
                                                min="1"
                                                value={quantity}
                                                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                                            />
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
            <ErrorMessage message={errorMessage} />
        </>
    );
}

export default Detail;
