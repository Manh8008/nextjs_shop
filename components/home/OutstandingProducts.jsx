'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { ProductCard } from '../card'
import styles from './HomeChild.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'
const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function OutstandingProducts() {
    const [outstandingProducts, setOutstandingProducts] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch(`${backendUrl}/products/filter/outstanding`)
        const result = await res.json()
        setOutstandingProducts(result)
    }

    return (
        <>
            {outstandingProducts &&
                outstandingProducts.map((product) => (
                    <li className={cx('product-item', gx('m-6', 'grid__column-2'))} key={product._id}>
                        <ProductCard key={product._id} product={product} />
                    </li>
                ))}
        </>
    )
}

export default OutstandingProducts
