import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: 'quotes',
    initialState: [],
    reducers: {
        removeQuote: (state, action) => {
            const newValue = state.value.filter((value) => value !== action.payload);
            state.value = newValue;
        },
        fillList: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { removeQuote, fillList } = quoteSlice.actions;
export default quoteSlice.reducer;