import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import gridStyles from '@/app/assets/styles/grid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const gx = classNames.bind(gridStyles);

const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer', gx('grid wide'))}>
                <div className="container">
                    <div className={cx('footer-row')}>
                        <div className={cx('footer-col')}>
                            <h4>company</h4>
                            <ul>
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">our services</a>
                                </li>
                                <li>
                                    <a href="#">privacy policy</a>
                                </li>
                                <li>
                                    <a href="#">affiliate program</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>get help</h4>
                            <ul>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">shipping</a>
                                </li>
                                <li>
                                    <a href="#">returns</a>
                                </li>
                                <li>
                                    <a href="#">order status</a>
                                </li>
                                <li>
                                    <a href="#">payment options</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>online shop</h4>
                            <ul>
                                <li>
                                    <a href="#">watch</a>
                                </li>
                                <li>
                                    <a href="#">bag</a>
                                </li>
                                <li>
                                    <a href="#">shoes</a>
                                </li>
                                <li>
                                    <a href="#">dress</a>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>follow us</h4>
                            <div className={cx('social-links')}>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('coppy-right')}>©IVYmoda All rights reserved</div>
            </footer>
        </div>
    );
};

export default Footer;
