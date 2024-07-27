
function Dashboard() {
    return (
        <>
            <ul className="box-info">
                <li>
                    <i className="bx bxs-calendar-check"></i>
                    <span className="text">
                        <h3>1020</h3>
                        <p>Đơn hàng mới</p>
                    </span>
                </li>
                <li>
                    <i className="bx bxs-group"></i>
                    <span className="text">
                        <h3>2834</h3>
                        <p>Khách hàng</p>
                    </span>
                </li>
                <li>
                    <i className="bx bxs-dollar-circle"></i>
                    <span className="text">
                        <h3>$2543</h3>
                        <p>Tổng doanh thu</p>
                    </span>
                </li>
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
                            <tr>
                                <td>
                                    <img src="assets/img/admin.jpg" />
                                    <p>Manh Nguyen</p>
                                </td>
                                <td>01-10-2021</td>
                                <td>
                                    <span className="status completed">Completed</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="assets/img/admin.jpg" />
                                    <p>Manh Nguyen</p>
                                </td>
                                <td>01-10-2021</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="assets/img/admin.jpg" />
                                    <p>Manh Nguyen</p>
                                </td>
                                <td>01-10-2021</td>
                                <td>
                                    <span className="status process">Process</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="assets/img/admin.jpg" />
                                    <p>Manh Nguyen</p>
                                </td>
                                <td>01-10-2021</td>
                                <td>
                                    <span className="status pending">Pending</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="assets/img/admin.jpg" />
                                    <p>Manh Nguyen</p>
                                </td>
                                <td>01-10-2021</td>
                                <td>
                                    <span className="status completed">Completed</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="todo">
                    <div className="head">
                        <h3>Việc cần làm</h3>
                        <i className="bx bx-plus"></i>
                        <i className="bx bx-filter"></i>
                    </div>
                    <ul className="todo-list">
                        <li className="completed">
                            <p>Todo List</p>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li className="completed">
                            <p>Todo List</p>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li className="not-completed">
                            <p>Todo List</p>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li className="completed">
                            <p>Todo List</p>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                        <li className="not-completed">
                            <p>Todo List</p>
                            <i className="bx bx-dots-vertical-rounded"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
