import { createSlice } from "@reduxjs/toolkit"
import type { AuthState } from "../Interfaces/authInterface"
import { loginThunk } from "./authThunk";

const initialState: AuthState = {
    user: null,
    token: null,
    status: "idle",
    error: undefined,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearAuth(state){
            state.user = null;
            state.token = null;
            state.status = "idle";
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(loginThunk.fulfilled, (state , action) => {
            state.status = 'fulfilled';
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.error = undefined;
        })
        .addCase(loginThunk.rejected, (state , action) => {
            state.status = "rejected";
            state.token = null;
            state.user = null;
            state.error = action.payload;
        })
    },
});


export const authReducer = authSlice.reducer;   