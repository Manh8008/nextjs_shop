import classNames from 'classnames/bind'
import { OutstandingProducts, NewProduct, Slide, Banner } from '@/components/home'
import { GalleryProducts } from '@/components/home'
import styles from './Home.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'
const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)

function Home() {
    return (
        <>
            <Slide />
            <div className={gx('grid', 'wide')}>
                <div className={cx('wrapper')}>
                    <div className={cx('product')}>
                        <h2 className={cx('product-heading')}>NEW ARRIVAL</h2>
                        <ul className={cx('product-list', gx('row'))}>
                            <NewProduct />
                        </ul>
                    </div>

                    <div className={cx('product')}>
                        <h2 className={cx('product-heading')}>Outstanding</h2>
                        <ul className={cx('product-list', gx('row'))}>
                            <OutstandingProducts />
                        </ul>
                    </div>

                    <div className={gx('grid')}>
                        <Banner />
                    </div>

                    <div className={cx('product')}>
                        <h2 className={cx('product-heading')}>GALLERY</h2>
                        <ul className={cx('product-list', gx('row'))}>
                            <GalleryProducts />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
