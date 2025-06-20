import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import prodcuctSlice from "./reducers/productSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    productReducer: prodcuctSlice,
    cartReducer: cartSlice,
  },
});
