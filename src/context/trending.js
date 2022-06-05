import { createSlice } from "@reduxjs/toolkit";

export const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },
});

export const { setData, setIsLoading } = trendingSlice.actions;