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
                        pathname === "/admin/orders" ? "active" : ""
                    }`}
                >
                    <Link href="/admin/orders">
                        <i className="bx bx-abacus"></i>
                        <span className="text">Đơn hàng</span>
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
            </ul>
            <ul className="side-menu">
                <li>
                    <Link href="/">
                        <i className="bx bxs-store"></i>
                        <span className="text">Cửa hàng</span>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default SidebarLeft;
