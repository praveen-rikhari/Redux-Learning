import { createSlice } from "@reduxjs/toolkit";

const QuoteSlice = createSlice({
    name: 'quote',
    initialState: {
        text: '',
    },
    reducers: {
        setQuote: (state, action) => {
            state.action = action.payload;
        },
    },
});

export const {setQuote} = QuoteSlice.actions;
export default QuoteSlice.reducer;