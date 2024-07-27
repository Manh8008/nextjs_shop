'use client'
import { useEffect, useRef, useState } from 'react'
import { ProductCard, FilterTop, FilterLeft } from "@/components"

function ProductBySlug({ params }) {
    const [products, setProducts] = useState([])
    const originalProducts = useRef([])
    const [isDataEmpty, setIsDataEmpty] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [pageSize, setPageSize] = useState(8)

    const handleSort = (order) => {
        let sortedProducts = [...products]
        if (order === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price)
        } else if (order === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price)
        } else if (order === 'newest') {
            sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        } else if (order === 'views') {
            sortedProducts.sort((a, b) => b.views - a.views)
        } else if (order === 'default') {
            sortedProducts = [...originalProducts.current]
        }

        setProducts(sortedProducts)
    }

    const handleFilter = (minPrice, maxPrice) => {
        const filtered = originalProducts.current.filter(product => product.price >= minPrice && product.price <= maxPrice)
        setProducts(filtered)
        setIsDataEmpty(filtered.length === 0)
    }

    const fetchProducts = async (page) => {
        try {
            const response = await fetch(`http://localhost:5000/products/category/${params.slug}?page=${page}&limit=${pageSize}`)
            if (!response.ok) {
                throw new Error('Mạng không ổn định !')
            }
            const data = await response.json()
            setProducts(data.products)
            originalProducts.current = data.products
            setTotalPages(data.totalPages)
            setIsDataEmpty(data.products.length === 0)
        } catch (error) {
            console.error('Lỗi khi tìm nạp sản phẩm:', error)
            setIsDataEmpty(true)
        }
    }

    useEffect(() => {
        fetchProducts(currentPage)
    }, [params.slug, currentPage, pageSize])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

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
    )
}

export default ProductBySlug
