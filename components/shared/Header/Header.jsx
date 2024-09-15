'use client'
import Image from 'next/image'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { SearchBar, Menu, CartHeader, UserHeader } from '@/components/header'
import styles from './Header.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'

const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={gx('grid', 'wide')}>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <FontAwesomeIcon icon={faBars} className={cx('mobile-menu', gx('l-0'))} />
                        <Menu />
                    </div>

                    <div>
                        <Link href={'/'}>
                            <Image
                                width={140}
                                height={45}
                                quality={100}
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

                        <div className={gx('m-0')}>
                            <UserHeader />
                        </div>

                        <CartHeader />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
