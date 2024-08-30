'use client';

import { useEffect, useState } from 'react';
import { ProductCard } from './index';

function NewProduct() {
    const [newProducts, setNewProducts] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/products/filter/new');
        const result = await res.json();
        setNewProducts(result);
    };

    return (
        <div className="product-sale">
            <h2 className="product-heading">NEW ARRIVAL</h2>

            <ul className="products grid">
                {newProducts &&
                    newProducts.map((product) => (
                        <li className="product-item grid__column-2" key={product._id}>
                            <ProductCard key={product._id} product={product} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default NewProduct;
