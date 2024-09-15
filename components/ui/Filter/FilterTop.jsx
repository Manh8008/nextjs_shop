import React from 'react'
import classNames from 'classnames/bind'
import styles from './Filter.module.scss'

const cx = classNames.bind(styles)

const FilterTop = ({ handleSort, handlePageChange, currentPage, totalPages }) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1)
        }
    }

    return (
        <div className={cx('home-filter')}>
            <span className={cx('home-filter__label')}>Sắp xếp theo</span>
            <button className={cx('btn--nav', 'home-filter__btn')} onClick={() => handleSort('views')}>
                Phổ biến
            </button>
            <button className={cx('btn--nav', 'home-filter__btn', 'btn--primary')} onClick={() => handleSort('newest')}>
                Mới nhất
            </button>
            <button className={cx('btn--nav', 'home-filter__btn')}>Bán chạy</button>

            <div className={cx('select-input')}>
                <span className={cx('select-input__label')}>Giá</span>
                <i className={cx('select-input__icon', 'fa-solid', 'fa-angle-down')}></i>
                <ul className={cx('select-input__list')}>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')} onClick={() => handleSort('default')}>
                            Mặc định
                        </button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')} onClick={() => handleSort('asc')}>
                            Giá: Thấp đến cao
                        </button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')} onClick={() => handleSort('desc')}>
                            Giá: Cao đến thấp
                        </button>
                    </li>
                </ul>
            </div>

            <div className={cx('home-filter__page')}>
                <span className={cx('home-filter__page-num')}>
                    <span className={cx('home-filter__page-current')}>{currentPage}</span>/{totalPages}
                </span>

                <div className={cx('home-filter__page-control')}>
                    <button
                        className={cx('home-filter__page-btn')}
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <i className={cx('home-filter__page-icon', 'fa-solid', 'fa-angle-left')}></i>
                    </button>
                    <button
                        className={cx('home-filter__page-btn')}
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <i className={cx('home-filter__page-icon', 'fa-solid', 'fa-angle-right')}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterTop
