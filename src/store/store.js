import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import quoteReducer from "../reducer/quoteSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        quote: quoteReducer,
    },
});