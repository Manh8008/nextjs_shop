import React, { useEffect, useState } from 'react'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

function Statistical() {
    const [orderCount, setOrderCount] = useState(0)
    const [totalRevenue, setTotalRevenue] = useState(0)

    useEffect(() => {
        const fetchStatistics = async () => {
            try {
                const orderCountResponse = await fetch(`${backendUrl}/orders/statistical/countOrders`)
                const orderCountData = await orderCountResponse.json()
                setOrderCount(orderCountData.orderCount)

                const totalRevenueResponse = await fetch(`${backendUrl}/orders/statistical/totalAmount`)
                const totalRevenueData = await totalRevenueResponse.json()
                setTotalRevenue(totalRevenueData.totalRevenue)
            } catch (error) {
                console.error('Error fetching statistics:', error)
            }
        }

        fetchStatistics()
    }, [])

    return (
        <>
            <li>
                <i className="bx bxs-calendar-check"></i>
                <span className="text">
                    <h3>{orderCount}</h3>
                    <p>Đơn hàng mới</p>
                </span>
            </li>
            <li>
                <i className="bx bxs-group"></i>
                <span className="text">
                    <h3>{orderCount}</h3>
                    <p>Khách hàng</p>
                </span>
            </li>
            <li>
                <i className="bx bxs-dollar-circle"></i>
                <span className="text">
                    <h3>
                        {totalRevenue.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND'
                        })}
                    </h3>
                    <p>Tổng doanh thu</p>
                </span>
            </li>
        </>
    )
}

export default Statistical
