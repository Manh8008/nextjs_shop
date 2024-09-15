import Swal from 'sweetalert2'
import classNames from 'classnames/bind'
import 'sweetalert2/src/sweetalert2.scss'

import styles from './CustomConfirm.module.scss'

const cx = classNames.bind(styles)

const CustomConfirm = (title, icon) => {
    return Swal.fire({
        title: title,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'ĐỒNG Ý',
        cancelButtonText: 'QUAY LẠI',
        customClass: {
            title: cx('custom-alert-title'),
            confirmButton: cx('custom-confirm-button'),
            cancelButton: cx('custom-cancel-button')
        }
    })
}

export default CustomConfirm
