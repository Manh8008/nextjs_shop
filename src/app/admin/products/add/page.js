

function AddProduct() {
    return (
        <div class="table-data">
            <div id="check-out">
                <div class="container_form-checkout">
                    <form action="">
                        <div class="row">
                            <div class="col">
                                <h3 class="title">Thêm sản phẩm</h3>

                                <div class="inputBox">
                                    <span>Tên sản phẩm:</span>
                                    <input type="text" placeholder="Nguyen Huu Manh" />
                                </div>
                                <div class="inputBox">
                                    <span>Miêu tả :</span>
                                    <textarea name="" id="" cols="42" rows="5"></textarea>
                                </div>
                                <div class="inputBox">
                                    <span>Giá :</span>
                                    <input type="text" placeholder="200.000đ" />
                                </div>
                                <div class="inputBox">
                                    <span>Ngày Thêm :</span>
                                    <input type="date" />
                                </div>

                                <div class="flex">
                                    <div class="inputBox">
                                        <span>Sản phẩm mới</span>
                                        <input type="number" placeholder="1" />
                                    </div>
                                    <div class="inputBox">
                                        <span>Sản phẩm hot</span>
                                        <input type="number" placeholder="0" />
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <h3 class="title">-----</h3>

                                <div class="inputBox">
                                    <span>Hình ảnh :</span>
                                    <input type="file" />
                                </div>
                                <div class="inputBox">
                                    <span>Danh mục :</span>
                                    <select name="" id="">
                                        <option value="">Thời trang nữ</option>
                                        <option value="">Thời trang nam</option>
                                        <option value="">Thời trang trẻ em</option>
                                    </select>
                                </div>

                                <div class="flex">
                                    <div class="inputBox">
                                        <span>Số lượng :</span>
                                        <input type="number" placeholder="10" />
                                    </div>
                                    <div class="inputBox">
                                        <span>CVV :</span>
                                        <input type="text" placeholder="1234" />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <button type="submit" value="Thêm" class="submit-btn">Thêm</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddProduct