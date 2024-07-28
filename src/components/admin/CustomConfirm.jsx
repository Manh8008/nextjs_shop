import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import "../../../public/css/customAlert.css";

const CustomConfirm = (title, icon) => {
    return Swal.fire({
        title: title,
        icon: icon,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
        customClass: {
            title: "custom-alert-title",
        },
    });
};

export default CustomConfirm;
