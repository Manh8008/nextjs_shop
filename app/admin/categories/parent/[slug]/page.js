'use client';
import { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';
import withAdminAuth from '@/middleware/withAdminAuth';
import CustomConfirm from '@/components/admin/CustomConfirm';

function SubCategories({ params }) {
    const [categories, setCategories] = useState([]);
    const [messages, setMessages] = useState('');

    const loadSubCategories = useCallback(async () => {
        try {
            const res = await fetch(`http://localhost:5000/categories/parent/${params.slug}`, {
                cache: 'no-store',
            });
            const data = await res.json();
            setCategories(data);
        } catch (error) {
            console.error('Failed to load subcategories:', error);
        }
    }, [params.slug]);

    useEffect(() => {
        loadSubCategories();
    }, [loadSubCategories]);

    const handleDelete = async (id, event) => {
        event.preventDefault();

        const result = await CustomConfirm('Bạn có chắc chắn muốn xóa danh mục này không?', 'question');
        if (!result.isConfirmed) {
            return;
        }

        try {
            const res = await fetch(`http://localhost:5000/categories/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                setCategories(categories.filter((category) => category._id !== id));
                setMessages('Xóa danh mục thành công');
            } else {
                throw new Error('Xóa danh mục thất bại');
            }
        } catch (error) {
            setMessages(error.message);
        }
    };

    return (
        <div className="table-data">
            <div className="order">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="head">
                    <h3>Các danh mục</h3>
                    <Link href="/admin/categories/add">Thêm danh mục</Link>
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
                        {categories.map((category) => (
                            <tr key={category._id}>
                                <td>
                                    <p>{category._id}</p>
                                </td>
                                <td>
                                    <Link href={`/admin/categories/parent/${category.slug}`}>{category.name}</Link>
                                </td>
                                <td>{new Date(category.updatedAt).toLocaleDateString()}</td>
                                <td>
                                    <Link className="edit__router" href={`/admin/categories/update/${category._id}`}>
                                        <i className="bx bx-pen"></i>
                                    </Link>
                                    <button onClick={(e) => handleDelete(category._id, e)} className="delete__btn">
                                        <i className="bx bx-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withAdminAuth(SubCategories);
