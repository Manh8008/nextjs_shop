'use client';
import { ProductCard } from '../../components';
import { ProductsLayout } from '@/app/layouts/ProductsLayout';
import { useFetchProducts } from '@/app/hooks/useFetchProducts';

function Search({ searchParams }) {
    const { products, isDataEmpty, currentPage, totalPages, handleSort, handlePageChange, handleFilter } =
        useFetchProducts(searchParams.keyword, 8, true);

    console.log(products);

    if (isDataEmpty) {
        return (
            <ProductsLayout
                handleFilter={handleFilter}
                handleSort={handleSort}
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            >
                <div className="home-product grid">
                    <h4 className="text-error">Không tìm thấy sản phẩm phù hợp !</h4>
                </div>
            </ProductsLayout>
        );
    }

    return (
        <ProductsLayout
            handleFilter={handleFilter}
            handleSort={handleSort}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
        >
            <div className="home-product grid">
                <h4 className="sub-title-main">KẾT QUẢ TÌM KIẾM THEO '{searchParams.keyword}'</h4>
                <ul className="products grid__row">
                    {Array.isArray(products) &&
                        products.map((product) => (
                            <li key={product._id} className="product-item grid__column-3">
                                <ProductCard product={product} />
                            </li>
                        ))}
                </ul>
            </div>
        </ProductsLayout>
    );
}

export default Search;
