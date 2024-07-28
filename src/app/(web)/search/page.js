'use client'
import React, { useEffect, useState } from "react";
import { ProductCard, FilterTop, FilterLeft, Loader } from "@/components";

function Search({ searchParams }) {
    const [searchProducts, setSearchProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [searchParams.keyword]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`http://localhost:5000/products/search/${searchParams.keyword}`);
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await res.json();
            setSearchProducts(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="main-container">
                <div className="grid wide">
                    <div className="grid__row main-content">
                        <div className="grid__column-2">
                            <FilterLeft />
                        </div>

                        <div className="grid__column-10">
                            {searchProducts.length > 0 && <FilterTop />}

                            <div className="home-product grid">
                                <h4 className="sub-title-main">KẾT QUẢ TÌM KIẾM THEO '{searchParams.keyword}'</h4>
                                {loading ? (
                                    <Loader />
                                ) : error ? (
                                    <div>
                                        <h4 className="text-error">{error}</h4>
                                    </div>
                                ) : searchProducts.length === 0 ? (
                                    <div>
                                        <h4 className="text-error">Không tìm thấy sản phẩm phù hợp !</h4>
                                    </div>
                                ) : (
                                    <ul className="products grid__row">
                                        {searchProducts.map(product => (
                                            <li key={product._id} className="product-item grid__column-3">
                                                <ProductCard product={product} />
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

export default Search;
