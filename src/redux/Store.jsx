import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculator/calculator.slice";
import CartSlice from "../features/cart/Cart.Slice";

const store = configureStore({
  reducer: {
    calculatorStore: calculatorSlice,
    myCart: CartSlice,
  },
});

export default store;
