function Categories() {
    return (
        <div className="table-data">
            <div className="order">
                <div className="head">
                    <h3>Các danh mục</h3>
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
                        <tr>
                            <td>
                                <img src="assets/img/admin.jpg" />
                                <p>01</p>
                            </td>
                            <td>Thời trang nữ</td>
                            <td>01-10-2021</td>
                            <td>
                                <a className="edit__router" href="editForm.html">
                                    <i className="bx bx-pen"></i>
                                </a>
                                <a href="" className="delete__btn">
                                    <i className="bx bx-trash"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="assets/img/admin.jpg" />
                                <p>01</p>
                            </td>
                            <td>Thời trang nam</td>
                            <td>01-10-2021</td>
                            <td>
                                <a className="edit__router" href="editForm.html">
                                    <i className="bx bx-pen"></i>
                                </a>
                                <a href="" className="delete__btn">
                                    <i className="bx bx-trash"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="assets/img/admin.jpg" />
                                <p>01</p>
                            </td>
                            <td>Thời trang trẻ em</td>
                            <td>01-10-2021</td>
                            <td>
                                <a className="edit__router" href="editForm.html">
                                    <i className="bx bx-pen"></i>
                                </a>
                                <a href="" className="delete__btn">
                                    <i className="bx bx-trash"></i>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="assets/img/admin.jpg" />
                                <p>01</p>
                            </td>
                            <td>Phụ kiện</td>
                            <td>01-10-2021</td>
                            <td>
                                <a className="edit__router" href="editForm.html">
                                    <i className="bx bx-pen"></i>
                                </a>
                                <a href="" className="delete__btn">
                                    <i className="bx bx-trash"></i>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories
