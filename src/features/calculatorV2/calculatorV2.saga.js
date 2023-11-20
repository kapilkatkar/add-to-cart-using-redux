// import { takeLatest, put, delay } from "redux-saga/effects";
// import { addFailed, addSuccess } from "./CalcualtorV2.Slice";

import { takeLatest, put, delay } from "redux-saga/effects";
import { addSuccess, addFailed } from "./calculatorV2.slice";

function* counter(actions) {
  try {
    console.log("action:", actions);
    yield delay(3000);
    const result = +actions.payload.num1 + +actions.payload.num2;
    yield put(addSuccess({ result }));
  } catch (err) {
    console.log("err : ", err);
    yield put(addFailed());
  }
}
export function* watchAddV2() {
  yield takeLatest("calculatorV2/add", counter);
}
