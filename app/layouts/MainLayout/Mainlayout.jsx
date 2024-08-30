import Footer from './Footer';
import Header from './Header';

function MainLayout({ children }) {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
