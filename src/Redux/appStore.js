import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import cartReducer from './cartSlice'
import shortReducer from './shortListSlice'
import categoryReducer from './categorySlice'
import currentProductReducer from "./currentProductSlice"

const appStore = configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
      short:shortReducer,
      path: categoryReducer,
      curr: currentProductReducer,
    },
  });
  
  export default appStore;