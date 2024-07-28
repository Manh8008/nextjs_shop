'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

const validationSchema = Yup.object({
    name: Yup.string().required("Tên sản phẩm là bắt buộc"),
    description: Yup.string().required("Miêu tả là bắt buộc"),
    price: Yup.number().required("Giá là bắt buộc").positive("Giá phải lớn hơn 0"),
    categorySlug: Yup.string().required("Danh mục là bắt buộc"),
    quantity: Yup.number().required("Số lượng là bắt buộc").positive("Số lượng phải lớn hơn 0").integer("Số lượng phải là số nguyên"),
    image: Yup.mixed().required("Hình ảnh là bắt buộc")
        .test("fileFormat", "Định dạng ảnh không hợp lệ", value => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)),
})

function AddProduct() {
    const router = useRouter()
    const [messages, setMessages] = useState('')
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            price: '',
            isNew: false,
            isOnSale: false,
            image: null,
            categorySlug: '',
            quantity: '',
        },

        validationSchema,
        onSubmit: async (values) => {
            setMessages('')

            try {
                const form = new FormData()
                for (const key in values) {
                    form.append(key, values[key])
                }
                const response = await fetch('http://localhost:5000/products/create', {
                    method: 'POST',
                    body: form
                })


                if (!response.ok) {
                    throw new Error('Mạng không ổn định')
                }
                const result = await response.json()
                setMessages('Thêm sản phẩm thành công!')
                setTimeout(() => {
                    router.push("/admin/products")
                }, 1500)
            } catch (error) {
                setMessages(error.message)
            }
        }
    })

    return (
        <div className="table-data">
            <div id="check-out">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="container_form-checkout">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <h3 className="title">Thêm sản phẩm</h3>
                                <div className="inputBox">
                                    <span>Tên sản phẩm:</span>
                                    <input
                                        type="text"
                                        placeholder="Nhập tên sản phẩm..."
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.name}</div>
                                    ) : null}
                                </div>

                                <div className="inputBox">
                                    <span>Giá :</span>
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="Nhập giá..."
                                        value={formik.values.price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.price && formik.errors.price ? (
                                        <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.price}</div>
                                    ) : null}
                                </div>

                                <div className="flex">
                                    <div className="inputBox">
                                        <span>Số lượng :</span>
                                        <input
                                            type="number"
                                            name="quantity"
                                            placeholder="Nhập số lượng..."
                                            value={formik.values.quantity}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.touched.quantity && formik.errors.quantity ? (
                                            <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i>{formik.errors.quantity}</div>
                                        ) : null}
                                    </div>
                                    <div className="inputBox">
                                        <span>Hình ảnh :</span>
                                        <input
                                            name="image" f
                                            type="file"
                                            onChange={(event) => {
                                                formik.setFieldValue('image', event.currentTarget.files[0])
                                            }}
                                        />
                                        {formik.touched.image && formik.errors.image ? (
                                            <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.image}</div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <h3 className="title">-----</h3>


                                <div className="inputBox">
                                    <span>Danh mục :</span>
                                    <select
                                        name="categorySlug"
                                        value={formik.values.categorySlug}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="nu">Thời trang nữ</option>
                                        <option value="nam">Thời trang nam</option>
                                        <option value="tre-em">Thời trang trẻ em</option>
                                    </select>
                                    {formik.touched.categorySlug && formik.errors.categorySlug ? (
                                        <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.categorySlug}</div>
                                    ) : null}
                                </div>

                                <div className="inputBox">
                                    <span>Miêu tả :</span>
                                    <textarea
                                        name="description"
                                        cols="68"
                                        rows="5"
                                        placeholder='Nhập miêu tả...'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></textarea>
                                    {formik.touched.description && formik.errors.description ? (
                                        <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.description}</div>
                                    ) : null}
                                </div>

                                <div className="flex">
                                    <div className="inputBox">
                                        <span>Sản phẩm mới</span>
                                        <input
                                            type="checkbox"
                                            name="isNew"
                                            checked={formik.values.isNew}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    <div className="inputBox">
                                        <span>Sản phẩm hot</span>
                                        <input
                                            type="checkbox"
                                            name="isOnSale"
                                            checked={formik.values.isOnSale}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
