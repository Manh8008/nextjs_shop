'use client';
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import withAdminAuth from '@/app/middleware/withAdminAuth';

const validationSchema = Yup.object({
    name: Yup.string().required('Tên danh mục là bắt buộc'),
    description: Yup.string().required('Miêu tả là bắt buộc'),
    image: Yup.mixed().required('Hình ảnh là bắt buộc'),
    // .test("fileFormat", "Định dạng ảnh không hợp lệ", value => value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)),
});

function UpdateCategory({ params }) {
    const router = useRouter();
    const [messages, setMessages] = useState('');
    const [currentImage, setCurrentImage] = useState('');

    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            image: null,
        },
        validationSchema,
        onSubmit: async (values) => {
            setMessages('');

            try {
                const form = new FormData();
                for (const key in values) {
                    form.append(key, values[key]);
                }

                const response = await fetch(`http://localhost:5000/categories/${params.id}`, {
                    method: 'PUT',
                    body: form,
                });

                if (!response.ok) {
                    throw new Error('Mạng không ổn định');
                }

                const result = await response.json();
                setMessages('Sửa danh mục thành công!');

                setTimeout(() => {
                    router.push('/admin/categories');
                }, 1500);
            } catch (error) {
                setMessages(error.message);
            }
        },
    });

    useEffect(() => {
        const loadCategory = async () => {
            const res = await fetch(`http://localhost:5000/categories/${params.id}/edit`);
            const result = await res.json();
            formik.setValues({
                name: result.name,
                description: result.description,
                image: result.image,
            });
            setCurrentImage(result.image);
        };

        loadCategory();
    }, [formik, params.id]);

    return (
        <div className="table-data">
            <div id="check-out">
                {messages && <p className="alert alert-success">{messages}</p>}
                <div className="container_form-checkout">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <h3 className="title">Sửa danh mục</h3>
                                <div className="inputBox">
                                    <span>Tên danh mục:</span>
                                    <input
                                        type="text"
                                        placeholder="Nhập tên danh mục..."
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="error-msg">
                                            <i className="fa-solid fa-circle-exclamation"></i> {formik.errors.name}
                                        </div>
                                    ) : null}
                                </div>

                                <div className="inputBox">
                                    <span>Hình ảnh :</span>
                                    <input
                                        name="image"
                                        type="file"
                                        onChange={(event) => {
                                            formik.setFieldValue('image', event.currentTarget.files[0]);
                                        }}
                                    />
                                    {formik.touched.image && formik.errors.image ? (
                                        <div className="error-msg">
                                            <i className="fa-solid fa-circle-exclamation"></i> {formik.errors.image}
                                        </div>
                                    ) : null}
                                </div>

                                {currentImage && (
                                    <div className="inputBox">
                                        <span>Ảnh hiện tại:</span>
                                        <Image
                                            width={50}
                                            height={50}
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${currentImage}`}
                                            alt="Current Image"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="col">
                                <h3 className="title">-----</h3>

                                <div className="inputBox">
                                    <span>Miêu tả :</span>
                                    <textarea
                                        name="description"
                                        cols="68"
                                        rows="5"
                                        placeholder="Nhập miêu tả..."
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    ></textarea>
                                    {formik.touched.description && formik.errors.description ? (
                                        <div className="error-msg">
                                            <i className="fa-solid fa-circle-exclamation"></i>{' '}
                                            {formik.errors.description}
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
    );
}

export default withAdminAuth(UpdateCategory);
