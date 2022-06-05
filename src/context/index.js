import { configureStore } from "@reduxjs/toolkit";
import { categorySlice } from "./categories";
import { loginSlice } from "./login";
import { trendingSlice } from "./trending";
import { cartSlice } from "./cart";

export const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        login: loginSlice.reducer,
        cart: cartSlice.reducer,
        trending: trendingSlice.reducer,
    },
});