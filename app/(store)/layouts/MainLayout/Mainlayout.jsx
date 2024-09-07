import classNames from 'classnames/bind';
import Footer from '../components/Footer';
import styles from './MainLayout.module.scss';
import { Header } from '../components/Header';

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
