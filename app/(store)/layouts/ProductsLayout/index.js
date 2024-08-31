'use client';
import { FilterLeft, FilterTop } from '@/app/(store)/components/Filter';

export const ProductsLayout = ({ children, handleFilter, handleSort, currentPage, totalPages, handlePageChange }) => {
    return (
        <div className="main-container">
            <div className="grid wide">
                <div className="grid__row main-content">
                    <div className="grid__column-2">
                        <FilterLeft handleFilter={handleFilter} />
                    </div>

                    <div className="grid__column-10">
                        <FilterTop
                            handleSort={handleSort}
                            handlePageChange={handlePageChange}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
