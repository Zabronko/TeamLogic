import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: "currentCustomer",
    initialState: {
        id: null,
        name: null
    },
    reducers: {
        change: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
        },
        reset: state => {
            state.id = null;
            state.name = null;
        }
    }
});

export const {change, reset} = customerSlice.actions;
export default customerSlice.reducer;