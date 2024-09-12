'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames/bind'
import styles from './Register.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'

import { Input, Button } from '@/components/ui'

const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)

const Register = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)

    const validateForm = () => {
        if (!username) return 'Lỗi! Vui lòng nhập Họ Tên'
        if (!email) return 'Lỗi! Vui lòng nhập Email'
        if (!phone) return 'Lỗi! Vui lòng nhập Số Điện thoại'
        if (!/\S+@\S+\.\S+/.test(email)) return 'Lỗi! Email không hợp lệ'
        if (!password) return 'Lỗi! Vui lòng nhập mật khẩu độ dài từ 7 tới 32 ký tự'
        if (password.length < 7 || password.length > 32) return 'Lỗi! Vui lòng nhập mật khẩu độ dài từ 7 tới 32 ký tự'
        if (password !== confirmPassword) return 'Lỗi! Mật khẩu không khớp'
        if (!dateOfBirth) return 'Lỗi! Vui lòng nhập Ngày sinh nhật'
        if (!address) return 'Lỗi! Vui lòng nhập Địa chỉ'
        if (!termsAccepted) return 'Lỗi! Vui lòng đồng ý với các điều khoản của IVY moda.'
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = { phone, email, password, username, address, dateOfBirth, gender }

        const errorMessage = validateForm()
        if (errorMessage) {
            setError(errorMessage)
            return
        }

        try {
            const response = await fetch('http://localhost:5000/users/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            const data = await response.json()

            console.log(data)

            if (response.ok) {
                setSuccess('Đăng kí thành công')
                router.push(`/verify/${data.userId}`)
            } else {
                setError(data.error || 'Lỗi! Email đã có người sử dụng rồi')
            }
        } catch (error) {
            setError('Xin vui lòng nhập đầy đủ thông tin!')
        }
    }

    return (
        <div className={gx('grid', 'wide')}>
            <h3 className={cx('title')}>Đăng ký</h3>
            {error && <p className={cx('alert', 'alert-danger')}>{error}</p>}
            {success && <p className={cx('alert', 'alert-success')}>{success}</p>}
            <form onSubmit={handleSubmit} className={gx('row no-gutters')} id="form-1">
                <div className={gx('c-6')}>
                    <h4 className={cx('sub-title')}>Thông tin khách hàng</h4>
                    <div className={gx('row no-gutters')}>
                        <div className={cx('input-wrap', gx('c-6'))}>
                            <Input
                                label="Tên tài khoản"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Họ tên..."
                            />
                        </div>
                        <div className={cx('input-wrap', gx('c-6'))}>
                            <Input
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Email..."
                            />
                        </div>
                        <div className={cx('input-wrap', gx('c-6'))}>
                            <Input
                                label="Ngày sinh"
                                value={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                placeholder="Ngày sinh..."
                            />
                        </div>
                        <div className={cx('select-wrap', gx('c-6'))}>
                            <label htmlFor="gender" className={cx('form-label')}>
                                Giới tính:
                            </label>
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                id="gender"
                                name="gender"
                            >
                                <option value="">Chọn giới tính</option>
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>

                        <div className={gx('c-12')}>
                            <Input
                                label="Địa chỉ"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                id="address"
                                name="address"
                                type="text"
                                placeholder="Địa chỉ..."
                            />
                        </div>
                        <div className={gx('c-12')}>
                            <Input
                                label="Số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="Số điện thoại..."
                            />
                        </div>
                    </div>
                </div>

                <div className={gx('c-6')}>
                    <h4 className={cx('sub-title')}>Thông tin mật khẩu</h4>
                    <div className={gx('row no-gutters')}>
                        <div className={gx('c-12')}>
                            <Input
                                label="Mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Mật khẩu..."
                            />
                        </div>
                        <div className={gx('c-12')}>
                            <Input
                                label="Xác nhận mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Nhập lại mật khẩu..."
                            />
                        </div>
                        <div className={cx('form-check', gx('c-12'))}>
                            <Input
                                value={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                type="checkbox"
                                id="terms"
                                name="terms"
                            />
                            <label className={cx('form-label')}>
                                <span>Đồng ý với các điều khỏa của IVY</span>
                            </label>
                        </div>

                        <div className={cx('router-page-btn')}>
                            <Button primary className={cx('btn-full-width')}>
                                Đăng ký
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
