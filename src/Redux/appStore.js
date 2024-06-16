import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import shortReducer from './shortListSlice'
import categoryReducer from './categorySlice'
import currentProductReducer from "./currentProductSlice"
import productReducer from './productSlice'

const appStore = configureStore({
    reducer: {
      user: userReducer,
      product: productReducer,
      cart: cartReducer,
      short:shortReducer,
      path: categoryReducer,
      curr: currentProductReducer,
    },
  });
  
  export default appStore;