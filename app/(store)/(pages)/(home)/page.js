import { OutstandingProducts, NewProduct, Slide } from '../../components';
import Link from 'next/link';

const Home = async () => {
    return (
        <>
            <Slide />
            <div className="main-container">
                <div className="grid wide">
                    <NewProduct />

                    <div className="banner-extra">
                        <Link href="" className="banner-extra-link">
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/banner-phu1.jpg`}
                                alt="Picture of the author"
                            />
                        </Link>
                    </div>

                    <OutstandingProducts />
                </div>
            </div>
            <div className="site-bottom"></div>
        </>
    );
};

export default Home;
