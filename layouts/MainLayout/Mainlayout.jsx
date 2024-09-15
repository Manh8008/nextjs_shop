import classNames from 'classnames/bind'
import styles from './MainLayout.module.scss'
import { Header, Footer } from '@/components/shared'

const cx = classNames.bind(styles)

function MainLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Header />
                {children}
                <div className={cx('site-bottom')}></div>

                <Footer />
            </div>
        </>
    )
}

export default MainLayout
