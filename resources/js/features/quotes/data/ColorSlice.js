import { createSlice } from "@reduxjs/toolkit";
import { colorArray } from "./ColorHolder"

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        value: colorArray[0]
    },
    reducers: {
        randomize: (state) => {
            const randomIndex = _.random(0, colorArray.length - 1, false);
            state.value = colorArray[randomIndex];
        }
    }
})

export const { randomize } = colorSlice.actions;
export default colorSlice.reducer