'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/slices/cartslice';
import { CustomAlert } from '../../CustomAlert';

const SizeSelector = ({ product, isOpen, setIsOpen }) => {
    const dispatch = useDispatch();
    const { _id } = product;

    const handleAddToCart = (size) => {
        if (_id) {
            dispatch(addToCart({ item: product, _id, size }));
            CustomAlert({ title: 'Thêm vào giỏ hàng thành công!', icon: 'success' });
            setIsOpen(false);
        } else {
            console.error('Product ID is missing.');
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="add-to-cart" onClick={handleClick}>
                <a href="">
                    <i className="add-to-cart-icon fa-solid fa-bag-shopping"></i>
                </a>
            </div>

            <div className={`list-size ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <button className="btn btn-large" onClick={() => handleAddToCart('S')}>
                            s
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-large" onClick={() => handleAddToCart('M')}>
                            m
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-large" onClick={() => handleAddToCart('L')}>
                            l
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-large" onClick={() => handleAddToCart('XL')}>
                            xl
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default SizeSelector;
