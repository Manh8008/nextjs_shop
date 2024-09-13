'use client'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import withAdminAuth from '@/middleware/withAdminAuth'
import CustomConfirm from '@/components/admin'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Categories() {
    const [categories, setCategories] = useState()

    const [messages, setMessages] = useState('')

    useEffect(() => {
        loadCategories()
    }, [])

    const loadCategories = async () => {
        const res = await fetch(`${backendUrl}/categories`, {
            cache: 'no-store'
        })
        const data = await res.json()

        console.log(data)
        setCategories(data)
    }

    const handleDelete = async (id, event) => {
        event.preventDefault()

        const result = await CustomConfirm('Bạn có chắc chắn muốn xóa danh mục này không?', 'question')
        if (!result.isConfirmed) {
            return
        }

        try {
            const res = await fetch(`${backendUrl}/categories/${id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                setCategories(categories.filter((category) => category._id !== id))
                setMessages('Xóa danh mục thành công')
            } else {
                throw new Error('Xóa danh mục thất bại')
            }
        } catch (error) {
            setMessages(error.message)
        }
    }

    return (
        <div className="table-data">
            <div className="order">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="head">
                    <h3>Các danh mục</h3>
                    <Link href={'/admin/categories/add'}>Thêm danh mục</Link>
                    <i className="bx bx-search"></i>
                    <i className="bx bx-filter"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên danh mục</th>
                            <th>Ngày cập nhật</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories &&
                            categories.map((categrory) => (
                                <tr key={categrory._id}>
                                    <td>
                                        <Image
                                            width={500}
                                            height={36}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${categrory.image}`}
                                            alt={categrory.name}
                                        />
                                        <p>{categrory._id.slice(-4)}</p>
                                    </td>
                                    <td>
                                        <Link href={`/admin/categories/parent/${categrory.slug}`}>
                                            {categrory.name}
                                        </Link>
                                    </td>
                                    <td>{new Date(categrory.updatedAt).toLocaleDateString()}</td>
                                    <td>
                                        <Link
                                            className="edit__router"
                                            href={`/admin/categories/update/${categrory.slug}`}
                                        >
                                            <i className="bx bx-pen"></i>
                                        </Link>
                                        <button onClick={(e) => handleDelete(categrory._id, e)} className="delete__btn">
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

export default withAdminAuth(Categories)
