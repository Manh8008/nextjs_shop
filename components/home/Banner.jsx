import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames/bind'

import styles from './HomeChild.module.scss'

const cx = classNames.bind(styles)

function Banner() {
    return (
        <div className={cx('banner-extra')}>
            <Link href="">
                <Image
                    className={cx('banner-extra-img')}
                    width={1770}
                    height={480}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner-phu1.jpg`}
                    alt="banner.."
                />
            </Link>
        </div>
    )
}

export default Banner
