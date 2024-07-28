'use client'
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { loginUser } from "../../../redux/slices/userSlice"

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
            const resultAction = dispatch(loginUser({ email, password }))
            if (loginUser.fulfilled.match(resultAction)) {
                // Đăng nhập thành công
                setSuccessMessage('Đăng nhập thành công')
                setErrorMessage('')
                router.push('/')
            } else {
                // Đăng nhập thất bại
                setErrorMessage(resultAction.payload || 'Lỗi! Tài khoản hoặc mật khẩu chưa chính xác')
                setSuccessMessage('')
            }
        } catch (error) {
            setErrorMessage('Đã xảy ra lỗi. Vui lòng thử lại sau.')
            setSuccessMessage('')
        }
    }

    return (
        <div className="main-container">
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form" id="form-1">
                    <h3 className="heading">Đăng nhập</h3>

                    {errorMessage && <p className="alert alert-danger">{errorMessage}</p>}
                    {successMessage && <p className="alert alert-success">{successMessage}</p>}

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email..."
                            className="form-control"
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Mật khẩu..."
                            className="form-control"
                        />
                        <span className="form-message"></span>
                    </div>

                    <div className="router-page-btn col">
                        <button className="form-submit" type="submit">
                            Đăng nhập
                        </button>
                        <Link className="turn-to-page-login" href="/register">
                            Bạn chưa có tài khoản ?
                        </Link>
                    </div>
                </form>
            </div>
            <div className="site-bottom"></div>
        </div>
    )
}

export default Login
