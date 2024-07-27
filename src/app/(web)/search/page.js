
'use client'
import React from "react";
import { fetchSearchedProduct } from "@/services";
import { ProductCard, FilterTop, FilterLeft } from "@/components";

const Search = async (params) => {
    const allSearchedProduct = await fetchSearchedProduct(params);

    const isDataEmpty = !Array.isArray(allSearchedProduct) || allSearchedProduct.length < 1;

    return (
        <>
            <div className="main-container">
                <div className="grid wide">
                    <div className="grid__row main-content">
                        <div className="grid__column-2">
                            <FilterLeft />
                        </div>

                        <div className="grid__column-10">
                            {!isDataEmpty && <FilterTop />}

                            <div className="home-product grid">
                                <h4 className="sub-title-main">KẾT QUẢ TÌM KIẾM THEO '{params.searchParams.keyword}'</h4>
                                {isDataEmpty ? (
                                    <div>
                                        <h4 className="text-error">Không tìm thấy sản phẩm phù hợp !</h4>
                                    </div>
                                ) : (
                                    <ul className="products grid__row">
                                        {allSearchedProduct.map(product => (
                                            <li className="product-item grid__column-3" >
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

export default Search;
