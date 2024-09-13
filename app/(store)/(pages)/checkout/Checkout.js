'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { ToastSuccess, Button } from '@/components/ui'
import { clearCart } from '@/redux/slices/cartslice'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

const Checkout = () => {
    const router = useRouter()

    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const [totalAmount, setTotalAmount] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState('')

    const cart = useSelector((state) => state.cart.items)
    const [user, setUser] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = JSON.parse(localStorage.getItem('userInfo')).token

                const response = await fetch(`${backendUrl}/users/profile`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    throw new Error('Lỗi xảy ra khi lấy thông tin người dùng')
                }

                const data = await response.json()

                setUser(data)
                setUsername(data.username || '')
                setPhone(data.phone || '')
                setAddress(data.address || '')
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchUserProfile()
    }, [])

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value)
    }

    useEffect(() => {
        const calculateTotalAmount = () => {
            let total = 0
            cart.forEach((item) => {
                total += item.price * item.quantity
            })
            setTotalAmount(total)
        }

        calculateTotalAmount()
    }, [cart])

    const validateForm = () => {
        if (!username) return 'Lỗi! Vui lòng nhập Họ Tên'
        if (!phone) return 'Lỗi! Vui lòng nhập Số Điện Thoại'
        if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phone)) return 'Lỗi! Số điện thoại không hợp lệ'
        if (!address) return 'Lỗi! Vui lòng nhập Địa chỉ'
        return null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = { phone, username, address, totalAmount, cart, paymentMethod }

        if (cart.length === 0) {
            setError('Bạn cần có ít nhất một sản phẩm trong giỏ hàng!')
            return
        }

        const errorMessage = validateForm()
        if (errorMessage) {
            setError(errorMessage)
            return
        }

        try {
            const response = await fetch(`${backendUrl}/orders/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })

            const data = await response.json()

            if (response.ok) {
                const orderId = data._id

                if (paymentMethod === '0') {
                    const momoResponse = await fetch(`${backendUrl}/payments/createPayment`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            amount: totalAmount + 38000,
                            orderInfo: `${orderId}`,
                            orderId: orderId
                        })
                    })

                    const momoData = await momoResponse.json()

                    if (momoResponse.ok) {
                        window.location.href = momoData.payUrl
                    } else {
                        setError(momoData.error || 'Lỗi khi tạo yêu cầu thanh toán MoMo')
                    }
                } else {
                    ToastSuccess({ title: 'Đặt hàng thành công!', icon: 'success' })
                    dispatch(clearCart())
                    setTimeout(() => {
                        router.push('/')
                    }, 1500)
                }
            } else {
                setError(data.error || 'Lỗi! Có lỗi xảy ra')
            }
        } catch (error) {
            setError('Xin vui lòng nhập đầy đủ thông tin!')
        }
    }

    return (
        <div className="main-container">
            <div className="register-form grid wide">
                {error && <p className="alert alert-danger">{error}</p>}
                <form onSubmit={handleSubmit} className="form grid__row" id="form-1">
                    <div className="c-8">
                        <h3 className="heading">Thông tin khách hàng</h3>
                        <div className="grid__row">
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="username" className="form-label">
                                        Tên tài khoản:
                                    </label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        id="username"
                                        name="username"
                                        type="text"
                                        placeholder="Họ tên..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>
                            <div className="c-6">
                                <div className="form-group col">
                                    <label htmlFor="phone" className="form-label">
                                        Số điện thoại:
                                    </label>
                                    <input
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        placeholder="Số điện thoại..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>

                            <div className="c-12">
                                <div className="form-group col">
                                    <label htmlFor="address" className="form-label">
                                        Địa chỉ:
                                    </label>
                                    <input
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        id="address"
                                        name="address"
                                        type="text"
                                        placeholder="Địa chỉ..."
                                        className="form-control"
                                    />
                                    <span className="form-message"></span>
                                </div>
                            </div>

                            <div className="c-12">
                                <div className="checkout-payment">
                                    <h3 className="heading">Phương thức thanh toán</h3>
                                    <div className="block-border">
                                        <p>
                                            Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không
                                            bao giờ được lưu lại.
                                        </p>
                                        <div className="checkout-payment__options">
                                            <label className="ds__item">
                                                <input
                                                    className="ds__item__input"
                                                    type="radio"
                                                    name="payment_method"
                                                    id="payment_method_5"
                                                    value="0"
                                                    checked={paymentMethod === '0'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <span className="ds__item__label">Thanh toán bằng MoMo</span>
                                            </label>
                                            <label className="ds__item">
                                                <input
                                                    className="ds__item__input"
                                                    type="radio"
                                                    name="payment_method"
                                                    id="payment_method_3"
                                                    value="1"
                                                    checked={paymentMethod === '1'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <span className="ds__item__label">Thanh toán khi giao hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="c-3">
                        <div className="cart-summary">
                            <div id="box_product_total">
                                <div className="cart-summary__overview">
                                    <h3 className="heading">Tóm tắt đơn hàng</h3>
                                    <div className="cart-summary__overview__item">
                                        <p>Tổng tiền hàng</p>
                                        <p>
                                            {totalAmount.toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })}
                                        </p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Tạm tính</p>
                                        <p>
                                            {totalAmount.toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })}
                                        </p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Phí vận chuyển</p>
                                        <p>38.000đ</p>
                                    </div>
                                    <div className="cart-summary__overview__item">
                                        <p>Tiền thanh toán</p>
                                        <p>
                                            {(totalAmount + 38000).toLocaleString('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            })}
                                        </p>
                                    </div>
                                    <hr style={{ marginTop: 20 }} />
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <Button primary small>
                                Hoàn thành
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="site-bottom"></div>
        </div>
    )
}

export default Checkout
