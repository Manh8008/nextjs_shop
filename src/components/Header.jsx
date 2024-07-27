"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/redux/slices/cartslice";
import { useSelector, useDispatch } from "react-redux";
import { SearchBar } from "./index";
import { logout } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

const Header = () => {
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const userInfo = useSelector((state) => state.user.userInfo);
    const cartItems = useSelector((state) => state.cart.items);
    const cartCount = cartItems.reduce(
        (count, item) => count + Number(item.quantity),
        0
    );
    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        console.log(userInfo);
    }, [userInfo]);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        setShowAccountMenu(false);
        router.push("/");
    };

    const handleRemoveFromCart = (productId, size) => {
        dispatch(removeFromCart({ _id: productId, size: size }));
    };

    const toggleAccountMenu = () => {
        if (userInfo) {
            setShowAccountMenu(!showAccountMenu);
        } else {
            router.push("/login");
        }
    };

    return (
        <header id="header" className="row no-gutters">
            <div className="grid wide">
                <div className="header__content">
                    <div className="header__left">
                        <ul className="header-menu m-0">
                            <li className="header-menu-item">
                                <Link
                                    href="/category/nu"
                                    className="header-menu-item-link"
                                >
                                    Nữ
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link
                                    href="/category/nam"
                                    className="header-menu-item-link"
                                >
                                    Nam
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link
                                    href="/category/tre-em"
                                    className="header-menu-item-link"
                                >
                                    Trẻ em
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link
                                    href="/category/sale-off"
                                    className="header-menu-item-link"
                                >
                                    Online sale
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link href="" className="header-menu-item-link">
                                    Bộ sưu tập
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link href="" className="header-menu-item-link">
                                    Về chúng tôi
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="header-logo col">
                        <Link href={"/"}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/logo.png`}
                                alt="Logo"
                                style={{
                                    width: 140,
                                    height: "auto",
                                }}
                                className="header-logo"
                            />
                        </Link>
                    </div>

                    <div className="header__right">
                        <div className="search-container m-0">
                            <SearchBar />
                        </div>

                        <div className="header__user">
                            <div
                                className="header_icon col"
                                onClick={toggleAccountMenu}
                            >
                                <i className="fa-regular fa-user"></i>
                            </div>
                            {showAccountMenu && (
                                <div className="sub-action">
                                    <div className="top-action">
                                        <a className="icon" href="#">
                                            <h3>Tài khoản của tôi</h3>
                                        </a>
                                    </div>
                                    <ul>
                                        <li>
                                            <Link href="/info">
                                                <i className="fa-regular fa-user"></i>
                                                Thông tin tài khoản
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-rotate-right"></i>
                                                Quản lý đơn hàng
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-solid fa-location-dot"></i>
                                                Sổ địa chỉ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa-regular fa-heart"></i>
                                                Sản phẩm yêu thích
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={handleLogout}>
                                                <i className="fa-solid fa-right-from-bracket"></i>
                                                Đăng xuất
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="header__cart">
                            <div className="header__cart-wrap">
                                <Link href="/cart" className="header_icon col">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </Link>
                                <span className="header__cart-notice">
                                    {cartCount}
                                </span>
                                <div className="header__cart-list">
                                    <h4 className="header__cart-heading">
                                        Sản phẩm đã thêm
                                    </h4>
                                    <ul className="header__cart-list-item">
                                        {cartItems.map((item) => (
                                            <li
                                                className="header__cart-item"
                                                key={`${item._id}-${item.size}`}
                                            >
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`}
                                                    alt=""
                                                    className="header__cart-img"
                                                />
                                                <div className="header__cart-item-info">
                                                    <div className="header__cart-item-head">
                                                        <h5 className="header__cart-item-name">
                                                            {item.name}
                                                        </h5>
                                                        <div className="header__cart-item-price-wrap">
                                                            <span className="header__cart-item-price">
                                                                {item.price}
                                                            </span>
                                                            <span className="header__cart-item-multiply">
                                                                x
                                                            </span>
                                                            <span className="header__cart-item-qnt">
                                                                {item.quantity}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="header__cart-item-body">
                                                        <span className="header__cart-item-des">
                                                            Phân loại:{" "}
                                                            {item.categorySlug}
                                                        </span>
                                                        <span
                                                            className="header__cart-remove"
                                                            onClick={() =>
                                                                handleRemoveFromCart(
                                                                    item._id,
                                                                    item.size
                                                                )
                                                            }
                                                        >
                                                            Xóa
                                                        </span>
                                                    </div>
                                                    <span
                                                        style={{
                                                            float: "left",
                                                        }}
                                                        className="header__cart-item-des"
                                                    >
                                                        Size: {item.size}
                                                    </span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="checkout"
                                        className="btn--large header__cart-btn-check-out"
                                    >
                                        Thanh Toán
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;