'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import './order.css'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Order() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchOrders()
    }, [])

    const fetchOrders = async () => {
        try {
            const res = await fetch(`${backendUrl}/orders`)
            const orders = await res.json()
            setOrders(orders)
        } catch (err) {
            console.error(err)
        }
    }

    const calculateTotalAmount = (cart) => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const getStatusClassName = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'status pending'
            case 'paid':
                return 'status paid'
            case 'processing':
                return 'status processing'
            case 'shipped':
                return 'status shipped'
            case 'delivered':
                return 'status delivered'
            case 'canceled':
                return 'status canceled'
            default:
                return 'status'
        }
    }

    const getStatusText = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'Đang chờ xử lý'
            case 'paid':
                return 'Đã thanh toán trước'
            case 'processing':
                return 'Đang xử lý'
            case 'shipped':
                return 'Đã vận chuyển'
            case 'delivered':
                return 'Đã giao hàng'
            case 'canceled':
                return 'Đã hủy'
            default:
                return status
        }
    }

    return (
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Recent orders</h3>
                    <i className="bx bx-search"></i>
                    <i className="bx bx-filter"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Mã đơn</th>
                            <th>Tổng tiền</th>
                            <th>Ngày đặt hàng</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <Link href={`/admin/orders/${order._id}`}>{order._id}</Link>
                                    </td>
                                    <td>{calculateTotalAmount(order.cart).toLocaleString('en-US')} đ</td>
                                    <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
                                    <td>
                                        <span className={getStatusClassName(order.status)}>
                                            {getStatusText(order.status)}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order
