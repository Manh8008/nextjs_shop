'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios({
                    url,
                    ...options,
                    params: options.params,
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetch();
    }, [url, options]);

    return { data, loading, error };
};

export default useFetch;
