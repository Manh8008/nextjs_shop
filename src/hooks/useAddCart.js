'use client'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartslice";
import { CustomAlert } from '@/components';

const useAddCart = (product) => {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    const handleAddToCart = (e) => {
        e.preventDefault();

        if (!size) {
            setErrorMessage('Bạn chưa chọn size!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }
        if (!quantity || quantity < 1) {
            setErrorMessage('Vui lòng nhập số lượng hợp lệ!');
            setTimeout(() => setErrorMessage(''), 3000);
            return;
        }

        dispatch(addToCart({ item: product, _id: product._id, quantity: parseInt(quantity, 10), size: size }));

        if (!cart.error) {
            CustomAlert("Thêm vào giỏ hàng thành công!", "success");
        }
    };

    return {
        quantity,
        setQuantity,
        size,
        setSize,
        errorMessage,
        handleAddToCart,
    };
};

export default useAddCart;
