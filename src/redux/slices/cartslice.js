import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { item, _id, size, quantity } = action.payload;

            let validQuantity = Number(quantity);
            if (isNaN(validQuantity) || validQuantity < 1) {
                validQuantity = 1;
            }

            const existingItem = state.items.find(
                (cartItem) => cartItem._id === _id && cartItem.size === size
            );

            if (existingItem) {
                existingItem.quantity += validQuantity;
            } else {
                state.items.push({ ...item, size, quantity: validQuantity });
            }
        },

        removeFromCart: (state, action) => {
            const { _id, size } = action.payload;
            state.items = state.items.filter(item => item._id !== _id || item.size !== size);
        },

        updateCartItemQuantity: (state, action) => {
            const { _id, size, quantity } = action.payload
            const item = state.items.find((item) =>
                item._id === _id && item.size === size
            )

            if (item) {
                item.quantity = quantity
            }
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions

export default cartSlice
