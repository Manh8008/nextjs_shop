"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Product() {
    const [products, setProducts] = useState();

    useEffect(() => {
        const loadProducts = async () => {
            const res = await fetch("http://localhost:5000/products", {
                cache: "no-store",
            });
            const data = await res.json();
            setProducts(data);
        };
        loadProducts();
    }, []);

    return (
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <i className="bx bx-search"></i>
                    <i className="bx bx-filter"></i>
                    <Link href={"/admin/products/add"}>Thêm sản phấm</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Giá khuyến mãi</th>
                            <th>Số lượng</th>
                            <th>Ngày update</th>
                            <th>Trạng thái</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product) => (
                            <tr>
                                <td>
                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`} />
                                    <p>{product._id}</p>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.price}đ</td>
                                <td>180.000đ</td>
                                <td>10</td>
                                <td>{new Date(product.updatedAt).toLocaleDateString()}</td>
                                <td>
                                    <span className="status completed">Còn hàng</span>
                                </td>
                                <td>
                                    <Link className="edit__router" href="/admin/products/update">
                                        <i className="bx bx-pen"></i>
                                    </Link>
                                    <Link href="#" className="delete__btn">
                                        <i className="bx bx-trash"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Product;
