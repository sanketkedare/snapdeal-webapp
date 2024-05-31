import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setPath: (state, action) => {
            return action.payload; // Update state directly
        },
        removePath: (state) => {
            return ''; // Reset state to empty string
        }
    }
});

export const { setPath, removePath } = categorySlice.actions;

export default categorySlice.reducer;
