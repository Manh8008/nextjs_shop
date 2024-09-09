'use client';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ProductCard } from '../../../components/index';
import styles from '../Home.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';
const gx = classNames.bind(gridStyles);
const cx = classNames.bind(styles);

function OutstandingProducts() {
    const [outstandingProducts, setOutstandingProducts] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/products/filter/outstanding');
        const result = await res.json();
        setOutstandingProducts(result);
    };

    return (
        <>
            {outstandingProducts &&
                outstandingProducts.map((product) => (
                    <li className={cx('product-item', gx('m-6 grid__column-2 '))} key={product._id}>
                        <ProductCard key={product._id} product={product} />
                    </li>
                ))}
        </>
    );
}

export default OutstandingProducts;