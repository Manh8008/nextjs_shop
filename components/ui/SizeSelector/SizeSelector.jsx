'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { addToCart } from '@/redux/slices/cartslice'
import ToastSuccess from '../Toasts/ToastSuccess'

import styles from './SizeSelector.module.scss'

const cx = classNames.bind(styles)

const SizeSelector = ({ product, isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const { _id } = product

    const handleAddToCart = (size) => {
        if (_id) {
            dispatch(addToCart({ item: product, _id, size }))
            ToastSuccess({ title: 'Thêm vào giỏ hàng thành công!', icon: 'success' })
            setIsOpen(false)
        } else {
            console.error('Product ID is missing.')
        }
    }

    const handleClick = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={cx('add-cart-btn')} onClick={handleClick}>
                <a href="" className={cx('add-to-icon')}>
                    <FontAwesomeIcon icon={faBagShopping} />
                </a>
            </div>

            <div className={cx('size-wrapper', { open: isOpen })}>
                <ul>
                    <li>
                        <button onClick={() => handleAddToCart('S')}>s</button>
                    </li>
                    <li>
                        <button onClick={() => handleAddToCart('M')}>m</button>
                    </li>
                    <li>
                        <button onClick={() => handleAddToCart('L')}>l</button>
                    </li>
                    <li>
                        <button onClick={() => handleAddToCart('XL')}>xl</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default SizeSelector
