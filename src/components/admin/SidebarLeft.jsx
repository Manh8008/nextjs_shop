import Link from "next/link";

function SidebarLeft() {
    return (
        <section id="sidebar">
            <Link href="/admin" class="brand">
                <i class="bx bxs-smile"></i>
                <span class="text">Admin</span>
            </Link>
            <ul class="side-menu top">
                <li class="active">
                    <a href="index.html">
                        <i class="bx bxs-dashboard"></i>
                        <span class="text">Trang chủ</span>
                    </a>
                </li>
                <li>
                    <Link href="/admin/products">
                        <i class="bx bxs-shopping-bag-alt"></i>
                        <span class="text">Sản phẩm</span>
                    </Link>
                </li>
                <li>
                    <Link href="/admin/categories">
                        <i class="bx bx-list-ul"></i>
                        <span class="text">Danh mục</span>
                    </Link>
                </li>
                <li>
                    <a href="member.html">
                        <i class="bx bxs-group"></i>
                        <span class="text">Team</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="bx bxs-message-dots"></i>
                        <span class="text">Message</span>
                    </a>
                </li>
            </ul>
            <ul class="side-menu">
                <li>
                    <a href="#">
                        <i class="bx bxs-cog"></i>
                        <span class="text">Cài đặt</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="logout">
                        <i class="bx bxs-log-out-circle"></i>
                        <span class="text">Đăng xuất</span>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default SidebarLeft;
