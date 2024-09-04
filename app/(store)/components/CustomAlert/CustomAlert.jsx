import Swal from 'sweetalert2';
import classNames from 'classnames/bind';
import 'sweetalert2/src/sweetalert2.scss';
import styles from './CustomAlert.module.scss';

const cx = classNames.bind(styles);

const CustomAlert = ({ title, icon }) => {
    Swal.fire({
        title: title,
        icon: icon,
        iconColor: '#000',
        background: '#fff',
        showConfirmButton: false,
        color: '#000',
        cancelButtonColor: '#d33',
        timer: 1500,
        customClass: {
            title: cx('title'),
        },
    });
};

export default CustomAlert;
