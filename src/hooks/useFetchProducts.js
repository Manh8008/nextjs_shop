import { useState, useEffect, useRef } from 'react';

export const useFetchProducts = (slug, pageSize) => {
    const [products, setProducts] = useState([]);
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOrder, setSortOrder] = useState('default');
    const originalProducts = useRef([]);

    const fetchProducts = async (page, order = sortOrder) => {
        try {
            let sortQuery = '';
            if (order === 'asc' || order === 'desc') {
                sortQuery = `&_sort&column=price&type=${order}`;
            } else if (order === 'newest') {
                sortQuery = `&_sort&column=createdAt&type=desc`;
            } else if (order === 'views') {
                sortQuery = `&_sort&column=views&type=desc`;
            }

            const response = await fetch(`http://localhost:5000/products/category/${slug}?page=${page}&limit=${pageSize}${sortQuery}`);
            if (!response.ok) {
                throw new Error('Mạng không ổn định !');
            }
            const data = await response.json();
            setProducts(data.products);
            originalProducts.current = data.products;
            setTotalPages(data.totalPages);
            setIsDataEmpty(data.products.length === 0);
        } catch (error) {
            console.error('Lỗi khi tìm nạp sản phẩm:', error);
            setIsDataEmpty(true);
        }
    };

    useEffect(() => {
        fetchProducts(currentPage);
    }, [slug, currentPage, pageSize]);

    const handleSort = (order) => {
        setSortOrder(order);
        fetchProducts(currentPage, order);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilter = (minPrice, maxPrice) => {
        const filtered = originalProducts.current.filter(product => product.price >= minPrice && product.price <= maxPrice);
        setProducts(filtered);
        setIsDataEmpty(filtered.length === 0);
    };

    return {
        products,
        isDataEmpty,
        currentPage,
        totalPages,
        handleSort,
        handlePageChange,
        handleFilter
    };
};
