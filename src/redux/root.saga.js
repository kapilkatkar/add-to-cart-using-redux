import { all, fork } from "redux-saga/effects";
import { watchCounter } from "../features/Counter/Counter.Saga";
import { watchAddV2 } from "../features/CalcualatorV2/CalcualtorV2.Saga";

export default function* rootSaga() {
  yield all([fork(watchCounter), fork(watchAddV2)]);
}
