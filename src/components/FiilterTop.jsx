import React from 'react';

const FilterTop = ({handleSort, handlePageChange, currentPage, totalPages }) => {
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    return (
        <div className="home-filter">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="btn--nav home-filter__btn" onClick={() => handleSort('views')}>Phổ biến</button>
            <button className="btn--nav home-filter__btn btn--primary" onClick={() => handleSort('newest')}>Mới nhất</button>
            <button className="btn--nav home-filter__btn">Bán chạy</button>

            <div className="select-input">
                <span className="select-input__label">Giá</span>
                <i className="select-input__icon fa-solid fa-angle-down"></i>
                <ul className="select-input__list">
                    
                    <li className="select-input__item">
                        <button className="select-input__link" onClick={() => handleSort('default')}>Mặc định</button>
                    </li>
                    <li className="select-input__item">
                        <button className="select-input__link" onClick={() => handleSort('asc')}>Giá: Thấp đến cao</button>
                    </li>
                    <li className="select-input__item">
                        <button className="select-input__link" onClick={() => handleSort('desc')}>Giá: Cao đến thấp</button>
                    </li>
                    
                </ul>
            </div>

            <div className="home-filter__page">
                <span className="home-filter__page-num">
                    <span className="home-filter__page-current">{currentPage}</span>/{totalPages}
                </span>

                <div className="home-filter__page-control">
                    <button
                        className="home-filter__page-btn"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <i className="home-filter__page-icon fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        className="home-filter__page-btn"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <i className="home-filter__page-icon fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterTop;
