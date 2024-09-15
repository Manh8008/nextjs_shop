'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './HomeChild.module.scss'

import { ProductCard } from '../card'
import gridStyles from '@/assets/styles/grid.module.scss'
const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function NewProduct() {
    const [newProducts, setNewProducts] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await fetch(`${backendUrl}/products/filter/new`)
        const result = await res.json()
        setNewProducts(result)
    }

    return (
        <>
            {newProducts &&
                newProducts.map((product) => (
                    <li className={cx('product-item', gx('m-6', 'grid__column-2'))} key={product._id}>
                        <ProductCard key={product._id} product={product} />
                    </li>
                ))}
        </>
    )
}

export default NewProduct
