import { configureStore } from '@reduxjs/toolkit';
import ColorSlice from './features/quotes/data/ColorSlice';
import QuoteSlice from './features/quotes/data/QuoteSlice';

export default configureStore({
    reducer: {
        color: ColorSlice,
        quote: QuoteSlice
    },
})