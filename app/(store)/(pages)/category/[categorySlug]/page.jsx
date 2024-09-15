'use client'
import classNames from 'classnames/bind'
import { ProductCard } from '@/components/card'
import { FilterLeft, FilterTop } from '@/components/ui'
import { useFetchProducts } from '@/hooks/useFetchProducts'

import gridStyles from '@/assets/styles/grid.module.scss'
import styles from './ProductsByCat.module.scss'

const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)

function CategoryProducts({ params }) {
    const { products, isDataEmpty, currentPage, totalPages, handleSort, handlePageChange, handleFilter } =
        useFetchProducts(params.categorySlug, 8)

    return (
        <div className={gx('grid', 'wide')}>
            <div className={cx('wrapper', gx('row', 'no-gutters'))}>
                <div className={gx('c-2')}>
                    <FilterLeft handleFilter={handleFilter} />
                </div>

                <div className={gx('c-10')} style={{ paddingLeft: 34 }}>
                    <FilterTop
                        handleSort={handleSort}
                        handlePageChange={handlePageChange}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    <div className={cx('product-wrap', gx('grid'))}>
                        <ul className={cx('products ', gx('row'))}>
                            {!isDataEmpty ? (
                                products.map((product) => (
                                    <li className={cx('product-item', gx('c-3', 'col'))} key={product._id}>
                                        <ProductCard product={product} />
                                    </li>
                                ))
                            ) : (
                                <div>
                                    <h4 className="text-error">Không tìm thấy sản phẩm phù hợp !</h4>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryProducts
