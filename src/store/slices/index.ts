import { combineReducers } from "@reduxjs/toolkit";
import boardListSlice from "./boardListReducer";

const rootReducer = combineReducers({
  boardList: boardListSlice.reducer,
});

export default rootReducer;
