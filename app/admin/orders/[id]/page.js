'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import '../order.css'
import { ToastSuccess } from '@/components/ui'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function OrderDetail({ params }) {
    const [order, setOrder] = useState(null)
    const [status, setStatus] = useState('')

    // Fetch order details
    const fetchOrder = useCallback(async () => {
        try {
            const res = await fetch(`${backendUrl}/orders/${params.id}`)
            if (!res.ok) throw new Error('Failed to fetch order')
            const orderData = await res.json()
            setOrder(orderData)
            setStatus(orderData.status)
        } catch (err) {
            console.error('Failed to fetch order:', err)
        }
    }, [params.id])

    useEffect(() => {
        fetchOrder()
    }, [fetchOrder])

    const calculateTotalAmount = (cart) => {
        if (!cart) return 0
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const handleStatusUpdate = async (event) => {
        event.preventDefault()
        try {
            const res = await fetch(`${backendUrl}/orders/${params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            })
            if (!res.ok) throw new Error('Failed to update status')
            const updatedOrder = await res.json()
            setOrder(updatedOrder)
            ToastSuccess({ title: 'Trạng thái đơn hàng đã được cập nhật!', icon: 'success' })
        } catch (err) {
            console.error('Failed to update status:', err)
            ToastSuccess({ title: 'Có lỗi!', icon: 'error' })
        }
    }

    if (!order) return <p>Đang tải...</p>

    return (
        <>
            <div className="left">
                <h2 className="order-detail-title">
                    Chi tiết đơn hàng <span style={{ color: 'red' }}>#{order._id}</span>
                </h2>
            </div>

            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Sản phẩm đã mua</h3>
                        <i className="bx bx-search"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <table className="order-table">
                        <thead className="order-table-header">
                            <tr>
                                <th>STT</th>
                                <th colSpan="2">Tên</th>
                                <th>Size</th>
                                <th>Giá tiền</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody className="order-table-body">
                            {order.cart &&
                                order.cart.map((product, index) => (
                                    <tr key={product._id} className="order-table-row">
                                        <td className="order-table-cell">{index + 1}</td>
                                        <td className="order-table-cell">
                                            <Image
                                                width={36}
                                                height={36}
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}`}
                                                alt={product.name}
                                                className="order-product-image"
                                            />
                                        </td>
                                        <td className="order-table-cell">{product.name}</td>
                                        <td className="order-table-cell">{product.size}</td>
                                        <td className="order-table-cell">{product.price.toLocaleString('vi-VN')}đ</td>
                                        <td className="order-table-cell">{product.quantity}</td>
                                        <td className="order-table-cell">
                                            {(product.price * product.quantity).toLocaleString('vi-VN')}đ
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                <div className="order-detail">
                    <h2>Tóm tắt đơn hàng</h2>
                    <p className="order-detail-info">
                        Ngày đặt hàng: {new Date(order.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                    <p className="order-detail-info">
                        Thời gian đặt hàng: {new Date(order.createdAt).toLocaleTimeString('vi-VN')}
                    </p>
                    <p className="order-detail-info">
                        Tạm tính: {calculateTotalAmount(order.cart).toLocaleString('vi-VN')}đ
                    </p>
                    <p className="order-detail-info">Phí vận chuyển: 38.000đ</p>
                    <p className="order-total">
                        Tổng cộng:{' '}
                        <span style={{ color: 'red' }}>
                            {(calculateTotalAmount(order.cart) + 38000).toLocaleString('vi-VN')}đ
                        </span>
                    </p>

                    <div className="order-detail-body">
                        <h2>Chi tiết khách hàng và đơn hàng</h2>
                        <p className="order-detail-info">Tên khách hàng: {order.username}</p>
                        <p className="order-detail-info">Số điện thoại: {order.phone}</p>
                        <p className="order-detail-info">
                            Phương thức thanh toán:{' '}
                            {order.paymentMethod && order.paymentMethod === '1'
                                ? 'Thanh toán khi nhận hàng'
                                : 'Thanh toán Momo'}
                        </p>
                        <div className="flex" style={{ display: 'flex' }}>
                            <p className="order-detail-info">Trạng thái đơn hàng:</p>
                            <form
                                onSubmit={handleStatusUpdate}
                                className="order-status-form"
                                style={{ marginTop: -8, marginLeft: 12 }}
                            >
                                <select name="status" id="order-status" value={status} onChange={handleStatusChange}>
                                    <option value="Pending">Đang chờ xử lý</option>
                                    <option value="Processing">Đang xử lí</option>
                                    <option value="Paid">Đã thanh toán trước</option>
                                    <option value="Shipped">Đã vận chuyển</option>
                                    <option value="Delivered">Đã giao hàng</option>
                                    <option value="Canceled">Đã hủy</option>
                                </select>
                                <button type="submit" className="update-status-btn">
                                    Cập nhật
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetail
