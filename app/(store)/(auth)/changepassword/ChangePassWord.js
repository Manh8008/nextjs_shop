'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

const ChangePassWord = () => {
    const router = useRouter()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            setError('Mật khẩu mới không khớp!')
            return
        }

        try {
            const token = JSON.parse(localStorage.getItem('userInfo')).token
            const response = await fetch(`${backendUrl}/users/changePassword`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `${token}`
                },
                body: JSON.stringify({
                    oldPassword,
                    newPassword
                })
            })

            const data = await response.json()

            if (response.ok) {
                setSuccess(data.message)
                setError('')
                router.push('/info')
            } else {
                setError(data.error)
                setSuccess('')
            }
        } catch (error) {
            console.error('Fetch Error:', error)
            setError('Có lỗi xảy ra. Vui lòng thử lại!')
        }
    }

    return (
        <div className="main-container">
            <div className="form-container">
                <form className="form" id="form-1" onSubmit={handleSubmit}>
                    <h3 className="heading">Đổi mật khẩu</h3>

                    {error && <p className="alert alert-danger">{error}</p>}
                    {success && <p className="alert alert-success">{success}</p>}

                    <div className="form-group">
                        <label htmlFor="oldPassword" className="form-label">
                            Mật khẩu hiện tại
                        </label>
                        <input
                            id="oldPassword"
                            name="oldPassword"
                            type="password"
                            className="form-control"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="newPassword" className="form-label">
                            Mật khẩu mới
                        </label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            className="form-control"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">
                            Nhập lại mật khẩu mới
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="router-page-btn col">
                        <button className="form-submit" type="submit">
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
            <div className="site-bottom"></div>
        </div>
    )
}

export default ChangePassWord
