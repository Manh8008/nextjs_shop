import { OutstandingProducts, NewProduct, Slide } from './components';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <Slide />
            <div className="wrapper">
                <div className="grid wide">
                    <NewProduct />
                    <div className="banner-extra">
                        <Link href="" className="banner-extra-link">
                            <Image
                                width={1770}
                                height={480}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner-phu1.jpg`}
                                alt="banner.."
                            />
                        </Link>
                    </div>

                    <OutstandingProducts />
                </div>
            </div>
            <div className="site-bottom"></div>
        </>
    );
}

export default Home;
