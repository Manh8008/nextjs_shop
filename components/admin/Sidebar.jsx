import Link from 'next/link';

function Sidebar() {
    return (
        <nav>
            <i className="bx bx-menu"></i>
            <a href="#" className="nav-link">
                Categories
            </a>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..." />
                    <button type="submit" className="search-btn">
                        <i className="bx bx-search"></i>
                    </button>
                </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <Link href="#" className="notification">
                <i className="bx bxs-bell"></i>
                <span className="num">8</span>
            </Link>
        </nav>
    );
}

export default Sidebar;
