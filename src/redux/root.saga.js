import { all, fork } from "redux-saga/effects";
import { watchAddV2 } from "../features/calculatorV2/calculatorV2.saga";
import { watchGetUsers } from "../features/users/user.saga";
export default function* rootSaga() {
  yield all([fork(watchAddV2), fork(watchGetUsers)]);
}
