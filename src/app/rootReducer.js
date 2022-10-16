import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
    paymentInfo: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.userInfo = payload;
        },
        setPayment(state, { payload }) {
            state.paymentInfo = payload;
        },
    },
});

export const { login, setPayment } = authSlice.actions;

export default authSlice.reducer;
