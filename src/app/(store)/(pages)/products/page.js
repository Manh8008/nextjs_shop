'use client';

import { useEffect, useState } from 'react';
import { ProductCard, FilterLeft, Loader, FilterTop } from '@/app/(store)/components';
function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const isDataEmpty = !Array.isArray(products) || products.length < 1 || !products;

    useEffect(() => {
        let isMounted = true;

        fetch('http://localhost:5000/products')
            .then((response) => response.json())
            .then((products) => {
                if (isMounted) {
                    setProducts(products);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                if (isMounted) {
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleSort = (order) => {
        const sortedProducts = [...products].sort((a, b) => {
            if (order === 'asc') {
                return a.price - b.price;
            } else if (order === 'desc') {
                return b.price - a.price;
            } else if (order === 'newest') {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }
            return 0;
        });

        setProducts(sortedProducts);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <div className="main-container">
                <div className="grid wide">
                    <div className="grid__row main-content">
                        <div className="grid__column-2">
                            <FilterLeft />
                        </div>

                        <div className="grid__column-10">
                            <FilterTop handleSort={handleSort} />

                            <div className="home-product grid">
                                {isDataEmpty ? (
                                    <div>
                                        <h4 className="text-error">Không tìm thấy sản phẩm phù hợp!</h4>
                                    </div>
                                ) : (
                                    <ul className="products grid__row">
                                        {products.map((product) => (
                                            <li className="product-item grid__column-3" key={product._id}>
                                                <ProductCard key={product._id} product={product} />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-bottom"></div>
        </>
    );
}

export default Products;
