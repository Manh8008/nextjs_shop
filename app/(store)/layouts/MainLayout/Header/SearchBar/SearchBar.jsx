'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styles from '../Header.module.scss';

const cx = classNames.bind(styles);

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
        <form className={cx('search-form')} onSubmit={handleSearch}>
            <button type="submit" className={cx('search-icon')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input
                type="text"
                name="keyword"
                value={model}
                onChange={handleChange}
                placeholder="TÌM KIẾM SẢN PHẨM"
                className={cx('search-input')}
            />
        </form>
    );
};

export default SearchBar;
