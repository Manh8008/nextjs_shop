'use client'
import React, { useState } from 'react'
import Slider from 'rc-slider'
import classNames from 'classnames/bind'
import styles from './Filter.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'

const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

import Button from '../Button'

const FilterLeft = ({ handleFilter }) => {
    const initialPriceRange = [0, 2000000]
    const [priceRange, setPriceRange] = useState(initialPriceRange)

    const handleApply = () => {
        handleFilter(priceRange[0], priceRange[1])
    }

    const handleReset = () => {
        setPriceRange(initialPriceRange)
        handleFilter(initialPriceRange[0], initialPriceRange[1])
    }

    return (
        <div className={cx('card')}>
            <article className={cx('filter-group')}>
                <header className={cx('card-header')}>
                    <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                        <h6 className={cx('title')}>Mức giá</h6>
                    </a>
                </header>
                <div className={cx('filter-content', 'collapse', 'show')} id="collapse_3">
                    <div className={cx('card-body')}>
                        <div className={cx('sub-list-side')}>
                            <Slider
                                range
                                min={0}
                                max={2000000}
                                value={priceRange}
                                onChange={(value) => setPriceRange(value)}
                            />
                            <div className={cx('value-range')}>
                                <div>{priceRange[0].toLocaleString('en-US')}đ</div>
                                <div>{priceRange[1].toLocaleString('en-US')}đ</div>
                            </div>
                        </div>
                        <div className={gx('row')} style={{ marginTop: 18 }}>
                            <div className={gx('c-6')}>
                                <Button primary small onClick={handleReset}>
                                    Bỏ lọc
                                </Button>
                            </div>

                            <div className={gx('c-6')}>
                                <Button outline small onClick={handleApply}>
                                    Lọc
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default FilterLeft
