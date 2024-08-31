'use client';
import { ProductCard } from '@/app/(store)/components';
import { ProductsLayout } from '@/app/(store)/layouts/ProductsLayout';
import { useFetchProducts } from '@/app/hooks/useFetchProducts';

function CategoryProducts({ params }) {
    const { products, isDataEmpty, currentPage, totalPages, handleSort, handlePageChange, handleFilter } =
        useFetchProducts(params.categorySlug, 8);

    return (
        <ProductsLayout
            handleFilterProductsLayout={handleFilter}
            handleSort={handleSort}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
        >
            <div className="home-product grid">
                <ul className="products grid__row">
                    {!isDataEmpty ? (
                        products.map((product) => (
                            <li className="product-item grid__column-3" key={product._id}>
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
        </ProductsLayout>
    );
}

export default CategoryProducts;
