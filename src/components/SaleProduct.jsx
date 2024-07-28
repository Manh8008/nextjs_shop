"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "./index";

function SaleProduct() {
    const [saleProducts, setSaleProducts] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/products/filter/sale");
        const result = await res.json();
        setSaleProducts(result);
    };
    return (
        <div className="product-sale">
            <h2 className="product-heading">BEST SELLER</h2>

            <ul className="products">
                {saleProducts &&
                    saleProducts.map((product) => (
                        <li className="product-item grid__column-2">
                            <ProductCard key={product._id} product={product} />
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default SaleProduct;
