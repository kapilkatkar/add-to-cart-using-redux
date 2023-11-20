import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculator/calculator.slice";
import CartSlice from "../features/cart/Cart.Slice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    calculatorStore: calculatorSlice,
    myCart: CartSlice,
  },
  middleware: (current) => current().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default store;
