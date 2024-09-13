'use client'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'
function Members({ params }) {
    const [currentRole, setCurrentRole] = useState('')
    const [messages, setMessages] = useState('')

    // Fetch user data when component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${backendUrl}/users/${params.id}`)
                const data = await response.json()
                setCurrentRole(data.role)
            } catch (error) {
                console.error('Error fetching user data:', error)
            }
        }
        fetchData()
    }, [params.id])

    // Formik setup
    const formik = useFormik({
        initialValues: {
            role: currentRole || ''
        },
        validationSchema: Yup.object({
            role: Yup.string().required('Quyền hạn là bắt buộc')
        }),
        onSubmit: async (values) => {
            try {
                const response = await fetch(`${backendUrl}/users/${params.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                })

                if (response.ok) {
                    setMessages('Cập nhật quyền hạn thành công')
                } else {
                    setMessages('Lỗi cập nhật quyền hạn')
                }
            } catch (error) {
                console.error('Error updating user role:', error)
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
                                <h3 className="title">Quyền hạn</h3>
                                <div className="inputBox">
                                    <span>Quyền hạn:</span>
                                    <input
                                        type="text"
                                        placeholder="Nhập quyền hạn..."
                                        name="role"
                                        value={formik.values.role}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.role && formik.errors.role ? (
                                        <div className="error-msg">
                                            <i className="fa-solid fa-circle-exclamation"></i> {formik.errors.role}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="submit-btn">
                            Sửa
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Members
