'use client'
import { ProductCard, FilterTop, FilterLeft } from "@/components";
import { useFetchProducts } from "@/hooks/useFetchProducts";

function ProductBySlug({ params }) {

    const {
        products,
        isDataEmpty,
        currentPage,
        totalPages,
        handleSort,
        handlePageChange,
        handleFilter
    } = useFetchProducts(params.slug, 8);

    return (
        <>
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

                            <div className="home-product grid">
                                <ul className="products grid__row">
                                    {!isDataEmpty ? (
                                        products.map(product => (
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
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-bottom"></div>
        </>
    );
}

export default ProductBySlug;
