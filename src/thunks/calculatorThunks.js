import { createAsyncThunk } from "@reduxjs/toolkit";

export const calculate = createAsyncThunk('calculator/calculate', async (expression) => {
    try {
        const result = eval(expression);
        return result;
    } catch (error) {
        throw new Error('INVALID EXPPESSION :(');
    }
})