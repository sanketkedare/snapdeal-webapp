import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action) {
            return action.payload;
        }
    }
});

export const { setProducts } = productSlice.actions;

// Export the reducer to be included in the store
export default productSlice.reducer;
