'use client';

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FilterLeft = ({ handleFilter }) => {
    const initialPriceRange = [0, 2000000];
    const [priceRange, setPriceRange] = useState(initialPriceRange);

    const handleApply = () => {
        handleFilter(priceRange[0], priceRange[1]);
    };

    const handleReset = () => {
        setPriceRange(initialPriceRange);
        handleFilter(initialPriceRange[0], initialPriceRange[1]);
    };

    return (
        <div className="card">
            <article className="filter-group">
                <header className="card-header">
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                        <i className="icon-control fa fa-chevron-down"></i>
                        <h6 className="title">Mức giá</h6>
                    </a>
                </header>
                <div className="filter-content collapse show" id="collapse_3">
                    <div className="card-body">
                        <div className="sub-list-side">
                            <Slider
                                range
                                min={0}
                                max={2000000}
                                value={priceRange}
                                onChange={(value) => setPriceRange(value)}
                            />
                            <div className="value-range">
                                <div>{priceRange[0].toLocaleString('en-US')}đ</div>
                                <div>{priceRange[1].toLocaleString('en-US')}đ</div>
                            </div>
                        </div>
                        <div className="row btn-filter-group">
                            <div className="c-6">
                                <button className="btn btn--large btn--outline btn_filter_remove" onClick={handleReset}>
                                    Bỏ lọc
                                </button>
                            </div>

                            <div className="c-6">
                                <button
                                    className=" btn btn--large btn_filter_product"
                                    style={{ right: 0 }}
                                    onClick={handleApply}
                                >
                                    Lọc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default FilterLeft;
