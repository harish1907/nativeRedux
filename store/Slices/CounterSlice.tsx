import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: any = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementAction: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

export const {increment, decrement, incrementAction} = counterSlice.actions;
export default counterSlice.reducer;