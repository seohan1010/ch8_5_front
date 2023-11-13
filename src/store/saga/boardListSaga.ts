import { call, put, all, takeEvery } from "redux-saga/effects";
import { boardListAction } from "../slices/boardListReducer";
import * as api from "../../api/api";

type typeAction = { type: string; payload: any };

type response = { list: []; ph: {} };

export function* getBoardActionSaga(action: typeAction) {
  console.log("<<<<<<<< getBoardActionSagaCalled");
  const data: response = yield api.getBoardList(action);
  yield put(boardListAction.GET_BOARDLIST_STATUS(data));
}

export function* onBoardListSaga() {
  yield takeEvery(boardListAction.GET_BOARDLIST_REQUESTED, getBoardActionSaga);
}

export function* boardSaga() {
  yield all([call(onBoardListSaga)]);
}
