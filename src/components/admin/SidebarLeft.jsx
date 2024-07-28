"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SidebarLeft() {
    const pathname = usePathname();

    return (
        <section id="sidebar">
            <Link href="/admin" className="brand">
                <i className="bx bxs-smile"></i>
                <span className="text">Admin</span>
            </Link>
            <ul className="side-menu top">
                <li className={`${pathname === "/admin" ? "active" : ""}`}>
                    <Link href="/admin">
                        <i className="bx bxs-dashboard"></i>
                        <span className="text">Dashboard</span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname === "/admin/products" ? "active" : ""
                    }`}
                >
                    <Link href="/admin/products">
                        <i className="bx bxs-shopping-bag-alt"></i>
                        <span className="text">Sản phẩm</span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname === "/admin/categories" ? "active" : ""
                    }`}
                >
                    <Link href="/admin/categories">
                        <i className="bx bx-list-ul"></i>
                        <span className="text">Danh mục</span>
                    </Link>
                </li>
                <li
                    className={`${
                        pathname === "/admin/members" ? "active" : ""
                    }`}
                >
                    <Link href="/admin/members">
                        <i className="bx bxs-group"></i>
                        <span className="text">Team</span>
                    </Link>
                </li>
                <li>
                    <a href="#">
                        <i className="bx bxs-message-dots"></i>
                        <span className="text">Message</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="#">
                        <i className="bx bxs-cog"></i>
                        <span className="text">Cài đặt</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="logout">
                        <i className="bx bxs-log-out-circle"></i>
                        <span className="text">Đăng xuất</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default SidebarLeft;
