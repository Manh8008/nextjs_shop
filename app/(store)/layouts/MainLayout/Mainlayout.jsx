import classNames from 'classnames/bind';
import Footer from './Footer';
import styles from './MainLayout.module.scss';
import { Header } from './Header';

const cx = classNames.bind(styles);

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
    );
}

export default MainLayout;
