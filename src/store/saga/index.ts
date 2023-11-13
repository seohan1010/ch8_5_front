import { all, fork } from "redux-saga/effects";
import { boardSaga } from "./boardListSaga";

export function* rootSaga() {
  yield all([fork(boardSaga)]);
}
