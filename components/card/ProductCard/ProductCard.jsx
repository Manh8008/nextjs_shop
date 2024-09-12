'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'
import { SizeSelector, Badge } from '@/components/ui'
import styles from './ProductCard.module.scss'

const cx = classNames.bind(styles)

const ProductCard = ({ product }) => {
    const { name, image, price, condition, originalPrice, categoryId, slug } = product
    const [isOpen, setIsOpen] = useState(false)

    const formattedPrice = price ? price.toLocaleString('en-US') : '0'

    return (
        <div className={cx('product-item-card')}>
            <div className={cx('product-top')}>
                <Link href={`/products/${slug}`} className={cx('product-thumb')}>
                    <Image
                        className={cx('product-image')}
                        width={500}
                        height={260}
                        quality={100}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}`}
                        alt={name}
                    />
                </Link>
                <Badge condition={condition} />
            </div>

            <div className={cx('product-info')}>
                <a href="#" className={cx('product-cat')}>
                    {categoryId}
                </a>
                <a href="#" className={cx('product-name')}>
                    {name}
                </a>
                <div className={cx('product-price')}>
                    <ins>{formattedPrice}đ</ins>
                    <del>
                        <span>{originalPrice && originalPrice.toLocaleString('en-US')} đ</span>
                    </del>
                </div>
            </div>

            <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default ProductCard
