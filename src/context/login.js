import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        otp: null,
        result: null,
        ph_number: null,
        name: "",
        type: "login",
        isAuthenticated: false,
        token: null,
    },
    reducers: {
        setOtp: (state, action) => {
            state.otp = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setPhNumber: (state, action) => {
            state.ph_number = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const {
    setOtp,
    setResult,
    setPhNumber,
    setName,
    setType,
    setToken,
    setIsAuthenticated,
} = loginSlice.actions;