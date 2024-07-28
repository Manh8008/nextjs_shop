'use client'
import useSWR from 'swr';

const useFetchProduct = (slug) => {
    const fetcher = url => fetch(url).then(res => res.json());
    const { data: product, error } = useSWR(
        `http://localhost:5000/products/${slug}`,
        fetcher
    );

    return { product, error, isLoading: !product && !error };
};

export default useFetchProduct;
