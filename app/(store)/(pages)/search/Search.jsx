'use client'
import { ProductCard } from '@/components/card'
import { useFetchProducts } from '@/hooks/useFetchProducts'
import { FilterLeft, FilterTop } from '@/components/ui'
import { NoResult } from '@/components/shared'

function Search({ searchParams }) {
    const { products, isDataEmpty, currentPage, totalPages, handleSort, handlePageChange, handleFilter } =
        useFetchProducts(searchParams.keyword, 8, true)

    if (isDataEmpty) {
        return <NoResult />
    }

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
                        <div className="home-product grid" style={{ paddingTop: 18 }}>
                            <ul className="products grid__row">
                                {products.products &&
                                    products.products.map((product) => (
                                        <li
                                            className="product-item grid__column-3"
                                            key={product._id}
                                            style={{ paddingBottom: 12 }}
                                        >
                                            <ProductCard product={product} />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
