'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'

import CustomConfirm from '@/components/admin/CustomConfirm/CustomConfirm'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Product() {
    const [products, setProducts] = useState()
    const [messages, setMessages] = useState('')

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = async () => {
        const res = await fetch(`${backendUrl}/products`, {
            cache: 'no-store'
        })
        const data = await res.json()
        setProducts(data)
    }

    const handleDelete = async (id, event) => {
        event.preventDefault()

        const result = await CustomConfirm('Bạn có chắc chắn muốn xóa sản phẩm này không?', 'question')
        if (!result.isConfirmed) {
            return
        }

        try {
            const res = await fetch(`${backendUrl}/products/${id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                setProducts(products.filter((product) => product._id !== id))
            } else {
                setMessages('Xóa sản phẩm thất bại')
            }
        } catch (error) {
            setMessages(error)
        }
    }

    return (
        <div className="table-data">
            <div className="order">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="head">
                    <i className="bx bx-search"></i>
                    <i className="bx bx-filter"></i>
                    <Link href={'/admin/products/add'}>Thêm sản phẩm</Link>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Ngày update</th>
                            <th>Trạng thái</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product) => (
                                <tr key={product._id}>
                                    <td>
                                        <Image
                                            width={36}
                                            height={36}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                            alt={product.name}
                                        />
                                        <p>{product._id.slice(-4)}</p>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>{product.price}đ</td>
                                    <td>{product.quantity || 'Đang cập nhật'}</td>
                                    <td>{new Date(product.updatedAt).toLocaleDateString()}</td>
                                    <td>
                                        <span className="status completed">
                                            {product.quantity ? 'Còn hàng' : 'Hết hàng'}
                                        </span>
                                    </td>
                                    <td>
                                        <Link className="edit__router" href={`/admin/products/update/${product._id}`}>
                                            <i className="bx bx-pen"></i>
                                        </Link>
                                        <button onClick={(e) => handleDelete(product._id, e)} className="delete__btn">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Product
