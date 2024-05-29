import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import shortReducer from './shortListSlice'

const appStore = configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
      short:shortReducer,
    },
  });
  
  export default appStore;