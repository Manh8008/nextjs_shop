'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
    const [model, setModel] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();

        if (model === '') {
            alert('Vui lòng nhập thông tin tìm kiếm !');
        } else {
            updateSearchParams(model.toLowerCase());
            setModel('');
        }
    };

    const updateSearchParams = (model) => {
        router.push(`/search?keyword=${model}`);
    };

    const handleChange = (e) => {
        setModel(e.target.value);
    };

    return (
        <form id="search-form" onSubmit={handleSearch}>
            <button type="submit" className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
                type="text"
                name="keyword"
                value={model}
                onChange={handleChange}
                placeholder="TÌM KIẾM SẢN PHẨM"
                className="search-input"
            />
        </form>
    );
};

export default SearchBar;
