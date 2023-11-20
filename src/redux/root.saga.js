import { all, fork } from "redux-saga/effects";
import watchAddV2 from "./Store";
export default function* rootSaga() {
  yield all([fork(watchAddV2)]);
}
