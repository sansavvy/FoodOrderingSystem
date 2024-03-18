import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //App level reducer
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
