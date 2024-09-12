'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { GalleryProductCard } from '../card'
import styles from './HomeChild.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'
const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

function GalleryProducts() {
    const [GalleryProducts, setGalleryProducts] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/products/filter/outstanding')
        const result = await res.json()
        setGalleryProducts(result)
    }

    return (
        <>
            {GalleryProducts &&
                GalleryProducts.map((product) => (
                    <li className={cx('product-item', gx('m-6 grid__column-2 '))} key={product._id}>
                        <GalleryProductCard key={product._id} product={product} />
                    </li>
                ))}
        </>
    )
}

export default GalleryProducts
