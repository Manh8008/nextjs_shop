function Breadcrumbs() {
    return (
        <section className="bread-crumb">
            <div className="cart-container">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a className="breadcrumb-item__link" href="">
                            Trang chủ
                        </a>
                        <span className="breadcrumb-icon">
                            <i className="fa-solid fa-angle-right"></i>
                        </span>
                    </li>
                    <li className="breadcrumb-item">
                        <a className="breadcrumb-item__link" href="">
                            Giỏ hàng
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Breadcrumbs;
