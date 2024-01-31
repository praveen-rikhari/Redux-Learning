import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import quoteReducer from "../reducer/quoteSlice";
import calculatorReducer from "../reducer/calculatorSlice";
import myMiddleware from "../middleware/myMiddleware";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        quote: quoteReducer,
        calculator: calculatorReducer,
    },
    middleware:
        (getDefaultMiddleware) => getDefaultMiddleware().concat(myMiddleware),
});

export default store;