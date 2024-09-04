'use client';
import Image from 'next/image';
import classNames from 'classnames/bind';
import Link from 'next/link';

import SearchBar from './SearchBar';
import Menu from './Menu/Menu';
import CartHeader from './CartHeader';
import UserHeader from './UserHeader';
import styles from './Header.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';

const cx = classNames.bind(styles);
const gx = classNames.bind(gridStyles);

const Header = () => {
    return (
        <header className={cx('wrapper', gx('row'), gx('no-gutters'))}>
            <div className={gx('grid', 'wide')}>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <Menu />
                    </div>

                    <div className={gx('col')}>
                        <Link href={'/'}>
                            <Image
                                width={140}
                                height={45}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/logo.png`}
                                alt="Logo"
                                className={cx('logo')}
                            />
                        </Link>
                    </div>

                    <div className={cx('right')}>
                        <div className={gx('m-0')}>
                            <SearchBar />
                        </div>

                        <UserHeader />

                        <CartHeader />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
