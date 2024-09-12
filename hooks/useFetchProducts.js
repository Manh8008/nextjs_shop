import { useState, useEffect, useRef } from 'react';
import { useCallback } from 'react';

export const useFetchProducts = (slugOrUrl, pageSize, isSearch = false) => {
    const [products, setProducts] = useState([]);
    const [isDataEmpty, setIsDataEmpty] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOrder, setSortOrder] = useState('default');
    const originalProducts = useRef([]);

    const fetchProducts = useCallback(
        async (page, order = sortOrder) => {
            try {
                let sortQuery = '';
                if (order === 'asc' || order === 'desc') {
                    sortQuery = `&_sort&column=price&type=${order}`;
                } else if (order === 'newest') {
                    sortQuery = `&_sort&column=createdAt&type=desc`;
                } else if (order === 'views') {
                    sortQuery = `&_sort&column=views&type=desc`;
                }

                const baseUrl = isSearch
                    ? `http://localhost:5000/products/search/${slugOrUrl}?page=${page}&limit=${pageSize}${sortQuery}`
                    : `http://localhost:5000/products/category/${slugOrUrl}?page=${page}&limit=${pageSize}${sortQuery}`;

                const response = await fetch(baseUrl);

                if (!response.ok) {
                    throw new Error('Mạng không ổn định !');
                }
                const data = await response.json();

                if (isSearch) {
                    setProducts(data);
                    originalProducts.current = data;
                    setTotalPages(1);
                } else {
                    setProducts(data.products);
                    originalProducts.current = data.products;
                    setTotalPages(data.totalPages || 1);
                }

                setIsDataEmpty(data.length === 0 || (data.products && data.products.length === 0));
            } catch (error) {
                console.error('Lỗi khi tìm nạp sản phẩm:', error);
                setIsDataEmpty(true);
            }
        },
        [sortOrder, slugOrUrl, pageSize, isSearch],
    );

    useEffect(() => {
        fetchProducts(currentPage);
    }, [slugOrUrl, currentPage, pageSize, sortOrder, isSearch, fetchProducts]);

    const handleSort = (order) => {
        setSortOrder(order);
        fetchProducts(currentPage, order);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilter = (minPrice, maxPrice) => {
        const filtered = originalProducts.current.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice,
        );
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
        handleFilter,
    };
};
