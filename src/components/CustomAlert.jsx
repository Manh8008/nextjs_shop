import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import '../../public/css/customAlert.css';

const CustomAlert = (title, icon) => {
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
            title: 'custom-alert-title',
        },
    });
};

export default CustomAlert;
