'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import classNames from 'classnames/bind'
import { Input, Button } from '@/components/ui'
import styles from './ChangePassWord.module.scss'
const cx = classNames.bind(styles)

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
                router.push('/')
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
        <div className={cx('wrapper')}>
            <form className="form" id="form-1" onSubmit={handleSubmit}>
                <h3 className={cx('title')}>Đổi mật khẩu</h3>

                {error && <p className="alert alert-danger">{error}</p>}
                {success && <p className="alert alert-success">{success}</p>}

                <Input
                    label="Mật khẩu cũ"
                    id="oldPassword"
                    name="oldPassword"
                    type="password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                />

                <Input
                    label="Mật khẩu mới"
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Input
                    label="Nhập lại mật khẩu mới"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className={cx('update-button')}>
                    <Button primary fullWidth>
                        Cập nhật
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassWord
