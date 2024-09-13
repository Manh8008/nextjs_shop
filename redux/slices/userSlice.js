import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Async Thunk để đăng nhập
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000'

export const loginUser = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
    try {
        const response = await fetch(`${backendUrl}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) {
            const error = await response.json()
            return rejectWithValue(error.message)
        }

        const data = await response.json()
        // Lưu thông tin người dùng vào localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))
        return data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState = {
    userInfo: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userInfo')) : null,
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.userInfo = null
            localStorage.removeItem('userInfo')
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false
                state.userInfo = payload
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { logout } = userSlice.actions
export default userSlice.reducer
