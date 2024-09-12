'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './GalleryProductCard.module.scss'

const cx = classNames.bind(styles)

const GalleryProductCard = ({ product }) => {
    const { name, image, slug } = product

    return (
        <div className={cx('product-item-card')}>
            <div className={cx('product-top')}>
                <Link href={`/products/${slug}`} className={cx('product-thumb')}>
                    <Image
                        className={cx('product-image')}
                        width={500}
                        height={260}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}`}
                        alt={name}
                    />
                </Link>
            </div>
        </div>
    )
}

export default GalleryProductCard
