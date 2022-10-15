import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, { payload }) {
            state.userInfo = payload;
        },
    },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
