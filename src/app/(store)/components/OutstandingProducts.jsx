'use client';
import { useEffect, useState } from 'react';
import { ProductCard } from './index';

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
        <div className="product-sale">
            <h2 className="product-heading">outstanding</h2>

            <ul className="products">
                {outstandingProducts &&
                    outstandingProducts.map((product) => (
                        <li className="product-item grid__column-2" key={product._id}>
                            <ProductCard key={product._id} product={product} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default OutstandingProducts;
