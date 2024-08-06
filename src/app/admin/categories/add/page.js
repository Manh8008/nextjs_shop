'use client'
import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import withAdminAuth from '@/middleware/withAdminAuth'

const validationSchema = Yup.object({
    name: Yup.string().required("Tên sản phẩm là bắt buộc"),
    description: Yup.string().required("Miêu tả là bắt buộc"),
    parent: Yup.string().nullable(),
})

function AddCategory() {
    const router = useRouter()
    const [messages, setMessages] = useState('')
    const [categories, setCategories] = useState([])
    const [selectedParent, setSelectedParent] = useState(null)
    const [selectedSubcategory, setSelectedSubcategory] = useState('')

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/categories')
                const data = await response.json()
                setCategories(data)
            } catch (error) {
                console.error('Failed to fetch categories:', error)
            }
        }

        fetchCategories()
    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image: null,
            parent: '',
        },

        validationSchema,
        onSubmit: async (values) => {
            setMessages('')

            try {
                const form = new FormData()
                form.append('name', values.name)
                form.append('description', values.description)
                form.append('parent', values.parent)

                if (values.image) { // Chỉ thêm hình ảnh nếu có
                    form.append('image', values.image)
                }

                const response = await fetch('http://localhost:5000/categories/create', {
                    method: 'POST',
                    body: form
                })

                if (!response.ok) {
                    throw new Error('Mạng không ổn định')
                }
                const result = await response.json()
                setMessages('Thêm sản phẩm thành công!')
                setTimeout(() => {
                    router.push("/admin/categories")
                }, 1500)
            } catch (error) {
                setMessages(error.message)
            }
        }
    })

    const handleParentChange = (e) => {
        const selectedParentId = e.target.value;
        formik.setFieldValue('parent', selectedParentId)
        const selectedParentCategory = categories.find(cat => cat._id === selectedParentId)
        setSelectedParent(selectedParentCategory || null)
        setSelectedSubcategory('') // Reset selected subcategory when parent changes
    }

    const handleSubcategoryChange = (e) => {
        const selectedSubcategoryId = e.target.value;
        formik.setFieldValue('parent', selectedSubcategoryId)
        setSelectedSubcategory(selectedSubcategoryId)
    }

    return (
        <div className="table-data">
            <div id="check-out">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="container_form-checkout">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <h3 className="title">Thêm danh mục</h3>
                                <div className="inputBox">
                                    <span>Tên danh mục:</span>
                                    <input
                                        type="text"
                                        placeholder="Nhập tên sản phẩm..."
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error-msg"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.name}</div>
                                    ) : null}
                                </div>

                                <div className="inputBox">
                                    <span>Hình ảnh :</span>
                                    <input
                                        name="image"
                                        type="file"
                                        onChange={(event) => {
                                            formik.setFieldValue('image', event.currentTarget.files[0])
                                        }}
                                    />
                                    {formik.touched.image && formik.errors.image ? (
                                        <div className="error-msg"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.image}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="col">
                                <h3 className="title">-----</h3>
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
                                        <div className="error-msg"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.description}</div>
                                    ) : null}
                                </div>

                                <div className="inputBox">
                                    <span>Danh mục cha:</span>
                                    <select
                                        name="parent"
                                        value={formik.values.parent}
                                        onChange={handleParentChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="">Chọn danh mục cha</option>
                                        {categories.map(category => (
                                            <option key={category._id} value={category._id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.touched.parent && formik.errors.parent ? (
                                        <div className="error-msg"><i className="fa-solid fa-circle-exclamation"></i> {formik.errors.parent}</div>
                                    ) : null}
                                </div>

                                {selectedParent && selectedParent.subcategories.length > 0 && (
                                    <div className="inputBox">
                                        <span>Danh mục con:</span>
                                        <select
                                            name="subParent"
                                            value={selectedSubcategory}
                                            onChange={handleSubcategoryChange}
                                        >
                                            <option value="">Chọn danh mục con</option>
                                            {selectedParent.subcategories.map(subcategory => (
                                                <option key={subcategory._id} value={subcategory._id}>
                                                    {subcategory.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withAdminAuth(AddCategory)
