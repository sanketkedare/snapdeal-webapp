import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const currentProductSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        setCurrentProduct: (state, action) => {
            return action.payload;
        }
    }
});

export const { setCurrentProduct } = currentProductSlice.actions;

export default currentProductSlice.reducer;
