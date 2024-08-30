function HeadTitle() {
    return (
        <div className="head-title">
            <div className="left">
                <ul className="breadcrumb">
                    <li>
                        <a href="#">Trang chủ</a>
                    </li>
                    <li>
                        <i className="bx bx-chevron-right"></i>
                    </li>
                    <li>
                        <a className="active" href="#">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
            <a href="#" className="btn-download">
                <i className="bx bxs-cloud-download"></i>
                <span className="text">Download PDF</span>
            </a>
        </div>
    );
}

export default HeadTitle;
