import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const shortListSlice = createSlice({
    name: 'shortLists',
    initialState,
    reducers: {
        addToShort: (state, action) => {
            state.push(action.payload);
        },
        removeFromShort: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
    }
});

export const { addToShort, removeFromShort } = shortListSlice.actions;

export default shortListSlice.reducer;
