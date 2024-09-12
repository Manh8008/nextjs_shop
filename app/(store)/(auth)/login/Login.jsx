'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import classNames from 'classnames/bind'
import Link from 'next/link'

import { loginUser } from '@/redux/slices/userSlice'
import { Input, Button } from '@/components/ui'
import styles from './Login.module.scss'

const cx = classNames.bind(styles)

function Login() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const validateForm = () => {
        if (!email || !password) {
            return 'Lỗi! Vui lòng nhập đầy đủ thông tin đăng nhập'
        }
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errorMessage = validateForm()
        if (errorMessage) {
            setErrorMessage(errorMessage)
            setSuccessMessage('')
            return
        }

        try {
            const resultAction = await dispatch(loginUser({ email, password }))
            const result = unwrapResult(resultAction)

            setSuccessMessage('Đăng nhập thành công')
            setErrorMessage('')

            setTimeout(() => {
                router.push('/')
            }, 1500)
        } catch (error) {
            setErrorMessage(error.message || 'Lỗi! Tài khoản hoặc mật khẩu chưa chính xác')
            setSuccessMessage('')
        }
    }

    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit} id="form-1">
                <h3 className={cx('title')}>Bạn đã có tài khoản IVY</h3>

                {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                {successMessage && <p className="alert alert-success">{successMessage}</p>}

                <Input
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email..."
                />

                <Input
                    label="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Mật khẩu..."
                />

                <div className={cx('router-page-btn', 'col')}>
                    <Button primary className={cx('btn-log-in')}>
                        Đăng nhập
                    </Button>

                    <Link className={cx('turn-to-page-login')} href="/register">
                        Bạn chưa có tài khoản ?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login
