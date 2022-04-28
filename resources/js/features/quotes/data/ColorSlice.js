import { createSlice } from "@reduxjs/toolkit";
import { colorArray } from "./ColorArray"

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        value: colorArray[0]
    },
    reducers: {
        randomize: (state) => {
            let color = state.value;

            while (color.bgColor == state.value.bgColor) {
                const randomIndex = _.random(0, colorArray.length - 1, false);
                color = colorArray[randomIndex];
            }
            
            state.value = color;
        }
    }
})

export const { randomize } = colorSlice.actions;
export default colorSlice.reducer