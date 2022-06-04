import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: [],
        isLoading: false,
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setCategory } = categorySlice.actions;