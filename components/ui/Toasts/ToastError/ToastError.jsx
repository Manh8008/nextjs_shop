import React from 'react'
import classNames from 'classnames/bind'
import styles from './ToastError.module.scss'

const cx = classNames.bind(styles)

const ErrorMessage = ({ message }) => {
    if (!message) return null

    return (
        <div className={cx('message')}>
            <span className={cx('icon')}>
                <i className="fa-solid fa-circle-exclamation"></i>
            </span>
            {message}
        </div>
    )
}

export default ErrorMessage
