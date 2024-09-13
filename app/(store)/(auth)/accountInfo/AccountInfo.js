'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import classNames from 'classnames/bind'

import { Button, Input } from '@/components/ui'
import styles from './AccountInfo.module.scss'
import gridStyles from '@/assets/styles/grid.module.scss'
import images from '@/assets/images'

const gx = classNames.bind(gridStyles)
const cx = classNames.bind(styles)
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

const AccountInfo = () => {
    const [user, setUser] = useState(null)

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
            } catch (error) {
                console.error('Fetch error:', error)
            }
        }

        fetchUserProfile()
    }, [])

    return (
        <div className={cx('account-info-wrapper')}>
            <div className={gx('grid', 'wide')}>
                <div className={gx('row')}>
                    <div className={gx('c-2')}>
                        <div className={cx('account-sidebar')}>
                            <div className={cx('account-header')}>
                                <div className={cx('account-user')} style={{ paddingBottom: 20, marginTop: 30 }}>
                                    <div className={cx('account-avatar')}>
                                        <Image
                                            width={50}
                                            height={50}
                                            src={user?.avatar || images.noImage}
                                            alt={user?.username}
                                        />
                                    </div>
                                    <div className={cx('account-username')}>
                                        <p>{user?.username || 'Tên người dùng'}</p>
                                    </div>
                                </div>
                            </div>
                            <ul className={cx('account-menu')}>
                                <li className={cx('account-menu-item')}>
                                    <Link href="/accountInfo">
                                        <i className="fa-regular fa-user"></i>Thông tin tài khoản
                                    </Link>
                                </li>
                                <li className={cx('account-menu-item')}>
                                    <a href="#">
                                        <i className="fa-solid fa-rotate-right"></i>Quản lý đơn hàng
                                    </a>
                                </li>
                                <li className={cx('account-menu-item')}>
                                    <a href="#">
                                        <i className="fa-solid fa-location-dot"></i>Sổ địa chỉ
                                    </a>
                                </li>
                                <li className={cx('account-menu-item')}>
                                    <a href="#">
                                        <i className="fa-regular fa-heart"></i>Sản phẩm yêu thích
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={gx('c-10')}>
                        <form className={cx('account-form', gx('grid__row'))} id="form-1">
                            <div className={gx('c-12')}>
                                <div className={cx('form-header')}>
                                    <h2>TÀI KHOẢN CỦA TÔI</h2>
                                </div>
                                <p className="alert alert-primary">
                                    Vì chính sách an toàn thẻ, bạn không thể thay đổi SĐT, Ngày sinh, Họ tên. Vui lòng
                                    liên hệ CSKH 0865587127 để được hỗ trợ
                                </p>
                                <div className={gx('grid__row')}>
                                    <div className={gx('c-6')}>
                                        <Input
                                            label="Tên tài khoản:"
                                            id="username"
                                            name="username"
                                            placeholder="Họ tên..."
                                            value={user?.username || ''}
                                            disabled
                                        />
                                    </div>
                                    <div className={gx('c-6')}>
                                        <Input
                                            label="Email:"
                                            id="email"
                                            name="email"
                                            type="text"
                                            value={user?.email || ''}
                                            placeholder="Email..."
                                        />
                                    </div>
                                    <div className={gx('c-6')}>
                                        <Input
                                            label="Ngày sinh:"
                                            id="dateOfBirth"
                                            name="dateOfBirth"
                                            type="text"
                                            defaultValue={user?.dateOfBirth || ''}
                                            disabled
                                        />
                                    </div>
                                    <div className={gx('c-6')}>
                                        <div className={cx('select-wrap')}>
                                            <div className={cx('form-group')}>
                                                <label htmlFor="gender" className={cx('form-label')}>
                                                    Giới tính:
                                                </label>

                                                <select
                                                    id="gender"
                                                    name="gender"
                                                    className={cx('form-control')}
                                                    value={user?.gender || ''}
                                                    onChange={(e) => setGender(e.target.value)}
                                                >
                                                    <option value="">Chọn giới tính</option>
                                                    <option value="male">Nam</option>
                                                    <option value="female">Nữ</option>
                                                    <option value="other">Khác</option>
                                                </select>
                                                <span className={cx('form-message')}></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={gx('c-5')}>
                                        <Button primary>Cập nhật</Button>
                                        <Button href={'/changepassword'} outline>
                                            Đổi mật khẩu
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo
