"use client";
import Statistical from "@/components/admin/Statistical";
import withAdminAuth from "@/middleware/withAdminAuth";
import { useEffect, useState } from "react";

function Dashboard() {
    const [recentOrders, setRecentOrders] = useState();

    useEffect(() => {
        fetchRecentOrders();
    }, []);

    const fetchRecentOrders = async () => {
        try {
            const res = await fetch(`http://localhost:5000/orders/recentOrders`);
            const data = await res.json();

            setRecentOrders(data);
        } catch (err) {
            console.error(err);
        }
    };



    console.log(recentOrders)

    return (
        <>
            <ul className="box-info">
                <Statistical />
            </ul>
            <div className="table-data">
                <div className="order">
                    <div className="head">
                        <h3>Các đơn gần đây</h3>
                        <i className="bx bx-search"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Ngày đặt hàng</th>
                                <th>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody>

                            {recentOrders && recentOrders.map((item) => (
                                <tr key={item._id}>
                                    <td>
                                        <p>{item.username}</p>
                                    </td>
                                    <td>{new Date(item.updatedAt).toLocaleDateString()}</td>
                                    <td><span >{item.status}</span></td>

                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default withAdminAuth(Dashboard);
