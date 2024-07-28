'use client'
import { useState } from "react"
import { useEffect } from "react"

function Categories() {

    const [categories, setCategories] = useState()


    useEffect(() => {
        loadCategories()
    }, [])



    const loadCategories = async () => {
        const res = await fetch("http://localhost:5000/categories", {
            cache: "no-store",
        })
        const data = await res.json()
        setCategories(data)
    }


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
                        {categories && categories.map((categrory) => (
                            <tr key={categrory._id}>
                                <td>
                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${categrory.image}`} />
                                    <p>{categrory._id.slice(-4)}</p>
                                </td>
                                <td>{categrory.name}</td>
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
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories
