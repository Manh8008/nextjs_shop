'use client';
import withAdminAuth from "@/middleware/withAdminAuth";
import Link from "next/link";
import { useState, useEffect } from "react";

function Member() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:5000/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setUsers(users.filter(user => user._id !== id));
            } else {
                console.error('Error deleting user:', await response.text());
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };


    return (
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Các tài khoản</h3>
                    <i className='bx bx-search'></i>
                    <i className='bx bx-filter'></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Mã</th>
                            <th>Họ và tên</th>
                            <th>Vai trò</th>
                            <th>Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>
                                    <p>{user._id}</p>
                                </td>
                                <td>{user.username}</td>
                                <td>{user.role}</td>
                                <td>
                                    <Link href={`/admin/members/${user._id}`}>
                                        <i
                                            className='bx bx-pen'
                                        ></i>
                                    </Link>
                                    <i
                                        className='bx bx-trash'
                                        onClick={() => handleDelete(user._id)}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withAdminAuth(Member);
