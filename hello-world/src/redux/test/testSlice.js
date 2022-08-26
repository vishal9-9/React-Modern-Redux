import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 10,
    name: 'ALEX'
}

export const counterSilce = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        INCREMENT: (state) => {
            state.count += 1
        },
        DECREMENT: (state) => {
            state.count -= 1
        }
    }
})

export const { INCREMENT , DECREMENT } = counterSilce.actions

export default counterSilce.reducer;