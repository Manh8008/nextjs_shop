'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Menu() {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${backendUrl}/categories`)
                const data = await response.json()

                setCategories(data)
            } catch (error) {
                console.error('Failed to fetch categories', error)
            }
        }

        fetchCategories()
    }, [])

    return (
        <ul className={cx('menu', 'm-0')}>
            {categories &&
                categories.map((category) => (
                    <li className={cx('menu-item')} key={category._id}>
                        <Link href={`/category/${category.slug}`} className={cx('menu-item-link')}>
                            {category.name}
                        </Link>
                        {category.subcategories && category.subcategories.length > 0 && (
                            <ul className={cx('sub-menu')}>
                                <div className={cx('cat-sub-menu')}>
                                    <div>
                                        <Link
                                            className={cx('cat-sub-menu-link')}
                                            href="https://ivymoda.com/danh-muc/hang-nu-moi-ve"
                                            style={{ color: '#FF0000' }}
                                        >
                                            NEW ARRIVAL
                                        </Link>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/lb-t7-269724">MODERN STYLE</a>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/eternal-elegance-lb-senora-090724">
                                            ETERNAL ELEGANCE
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/ocean-jewels-lb-1204">OCEAN JEWELS</a>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/ss-2024-campain-ts-2103">THE FLOW</a>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/office-to-urban-lb-t3-0403">URBAN CHIC</a>
                                    </div>
                                    <div>
                                        <a href="https://ivymoda.com/danh-muc/lookbook-senora-0112">
                                            ARTISANAL DELICATE
                                        </a>
                                    </div>
                                </div>
                                <div className={cx('list-submenu', 'd-flex')}>
                                    {category.subcategories &&
                                        category.subcategories.map((subCategory) => (
                                            <div className={cx('item-list-submenu')} key={subCategory._id}>
                                                <h3>
                                                    <Link href={`/category/${subCategory.slug}`}>
                                                        {subCategory.name}
                                                    </Link>
                                                </h3>
                                                <ul>
                                                    {subCategory.subcategories &&
                                                        subCategory.subcategories.map((child) => (
                                                            <li key={child._id}>
                                                                <Link href={`/category/${child.slug}`}>
                                                                    {child.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        ))}
                                </div>
                            </ul>
                        )}
                    </li>
                ))}

            <li className={cx('menu-item')}>
                <a href="/category/sale-off" className={cx('menu-item-link')}>
                    Online sale
                </a>
            </li>
            <li className={cx('menu-item')}>
                <a href="#" className={cx('menu-item-link')}>
                    Bộ sưu tập
                </a>
            </li>
            <li className={cx('menu-item')}>
                <a href="#" className={cx('menu-item-link')}>
                    Về chúng tôi
                </a>
            </li>
        </ul>
    )
}

export default Menu
