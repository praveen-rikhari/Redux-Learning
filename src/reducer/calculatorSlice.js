import { createSlice } from "@reduxjs/toolkit";

const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        result: 0,
    },
    reducers: {
        setResult: (state, action) => {
            state.result = action.payload
        },
    },
});

export const { setResult } = CalculatorSlice.actions;
export default CalculatorSlice.reducer;