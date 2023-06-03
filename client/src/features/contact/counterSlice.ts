import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    data: number,
    title: string
}

const initialState: CounterState = {
    data: 23,
    title: 'Narendra Babu Gariganti (Redux tool kit)'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment:(state,action) => {
            state.data += action.payload
        },
        decrement:(state,action) => {
            state.data -= action.payload
        }
    }
})

export const {increment,decrement} = counterSlice.actions;