import { configureStore } from '@reduxjs/toolkit';
import ColorSlice from './features/quotes/data/ColorSlice';

export default configureStore({
    reducer: {
        color: ColorSlice
    },
})