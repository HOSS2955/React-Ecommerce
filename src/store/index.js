import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducer/cartSlice";
import { productSlice } from "./reducer/productsSlice";

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    cartSlice: cartSlice,
  },
});
