'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames/bind'

import { ToastSuccess, Button } from '@/components/ui'
import { clearCart } from '@/redux/slices/cartslice'
import { Input } from '@/components/ui'
import { CartList, CartSummary } from '@/components/shared'
import styles from './CheckOut.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'

const cx = classNames.bind(styles)
const gx = classNames.bind(gridStyles)
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

const Checkout = () => {
    const router = useRouter()
    const [isProductDisplay, setIsProductDisplay] = useState(false)
    const [phone, setPhone] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const [totalAmount, setTotalAmount] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState('')
    const cart = useSelector((state) => state.cart.items)
    const [user, setUser] = useState(null)

    const dispatch = useDispatch()
    const productQuantity = cart.length

    console.log(productQuantity)
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

    const submitOrder = async () => {
        const userData = { phone, username, address, totalAmount, cart, paymentMethod }

        const response = await fetch(`${backendUrl}/orders/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.error || 'Lỗi! Có lỗi xảy ra')
        }
        return data
    }

    const handleMomoPayment = async (orderId, totalAmount) => {
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

        if (!momoResponse.ok) {
            throw new Error(momoData.error || 'Lỗi khi tạo yêu cầu thanh toán MoMo')
        }
        return momoData
    }

    const handleSuccess = () => {
        ToastSuccess({ title: 'Đặt hàng thành công!', icon: 'success' })
        dispatch(clearCart())
        setTimeout(() => {
            router.push('/')
        }, 1500)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = { phone, username, address, totalAmount, cart, paymentMethod }

        if (cart.length === 0) {
            setError('Bạn cần có ít nhất một sản phẩm trong giỏ hàng!')
            return
        }

        if (paymentMethod === '') {
            setError('Vùi lòng chọn phương thức thanh toán!')
            return
        }

        const errorMessage = validateForm()
        if (errorMessage) {
            setError(errorMessage)
            return
        }

        try {
            const orderData = await submitOrder(userData)
            const orderId = orderData._id

            if (paymentMethod === '0') {
                const momoData = await handleMomoPayment(orderId, totalAmount)
                window.location.href = momoData.payUrl
            } else {
                handleSuccess()
            }
        } catch (error) {
            setError(error.message || 'Xin vui lòng nhập đầy đủ thông tin!')
        }
    }

    const handleToggleCartList = (e) => {
        e.preventDefault()
        setIsProductDisplay((prevState) => !prevState)
    }

    return (
        <div className={cx('wrapper', gx('grid', 'wide'))}>
            {error && <p className="alert alert-danger">{error}</p>}
            <form onSubmit={handleSubmit} className={cx('form', gx('row'))} id="form-1">
                <div className={gx('c-8')}>
                    <h3 className={cx('title')}>Thông tin khách hàng</h3>
                    <div className={cx('row')}>
                        <div className={gx('c-6')}>
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
                        <div className={gx('c-6')}>
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
                            <h3 className={cx('title')}>Phương thức thanh toán</h3>
                            <div className={gx('row')}>
                                <div className={cx('checkout-payment')}>
                                    <div className={cx('block-border')}>
                                        <p>
                                            Mọi giao dịch đều được bảo mật và mã hóa. Thông tin thẻ tín dụng sẽ không
                                            bao giờ được lưu lại.
                                        </p>
                                        <div className={cx('checkout-payment__options')}>
                                            <label className={cx('ds__item')}>
                                                <input
                                                    type="radio"
                                                    name="payment_method"
                                                    id="payment_method_5"
                                                    value="0"
                                                    checked={paymentMethod === '0'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <span className={cx('ds__item__label')}>Thanh toán bằng MoMo</span>
                                            </label>
                                            <label className={cx('ds__item')}>
                                                <input
                                                    type="radio"
                                                    name="payment_method"
                                                    id="payment_method_3"
                                                    value="1"
                                                    checked={paymentMethod === '1'}
                                                    onChange={handlePaymentMethodChange}
                                                />
                                                <span className={cx('ds__item__label')}>Thanh toán khi giao hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={gx('c-12')} style={{ marginTop: 24 }}>
                            <Button primary large onClick={handleToggleCartList}>
                                Hiển thị sản phẩm
                            </Button>

                            {isProductDisplay && <CartList memoizedCartItems={cart} />}
                        </div>
                    </div>
                </div>

                <div className={cx('c-3')}>
                    <CartSummary totalAmount={totalAmount} productQuantity={productQuantity} />
                    <Button primary fullWidth>
                        Đặt hàng
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Checkout
