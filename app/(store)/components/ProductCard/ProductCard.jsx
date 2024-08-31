'use client';
import React, { useState } from 'react';
import { SizeSelector } from './SizeSelector';
import { Badge } from './Badge';

const ProductCard = ({ product }) => {
    const { name, image, price, condition, originalPrice, categoryId, slug } = product;
    const [isOpen, setIsOpen] = useState(false);

    const formattedPrice = price ? price.toLocaleString('en-US') : '0';

    return (
        <div className="product-item-card">
            <div className="product-top">
                <a href={`/products/${slug}`} className="product-thumb">
                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}`} />
                </a>
                <Badge condition={condition} />
            </div>

            <div className="product-info">
                <a href="#" className="product-cat">
                    {categoryId}
                </a>
                <a href="#" className="product-name">
                    {name}
                </a>
                <div className="product-price">
                    <ins>{formattedPrice}đ</ins>
                    <del>
                        <span>{originalPrice && originalPrice.toLocaleString('en-US')} đ</span>
                    </del>
                </div>
            </div>

            <SizeSelector product={product} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

export default ProductCard;
