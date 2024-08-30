import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import '@/app/assets/css/customAlert.css';

const CustomConfirm = (title, icon) => {
    return Swal.fire({
        title: title,
        icon: icon,
        showCancelButton: true,
        confirmButtonText: 'ĐỒNG Ý',
        cancelButtonText: 'QUAY LẠI',
        customClass: {
            title: 'custom-alert-title',
            confirmButton: 'custom-confirm-button',
            cancelButton: 'custom-cancel-button',
        },
    });
};

export default CustomConfirm;
