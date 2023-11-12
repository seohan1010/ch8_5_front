import { createSlice } from "@reduxjs/toolkit";

type initialValue = { status: number; boardList: []; ph: {} };
const initialState: initialValue = { status: 0, boardList: [], ph: {} };

const boardListSlice = createSlice({
  name: "boardList",
  initialState: initialState,
  reducers: {
    GET_BOARDLIST_REQUESTED(state, action) {
      console.log("get_boardList_requested");
    },
    GET_BOARDLIST_STATUS(state, action) {
      const { list, ph, status } = action.payload;
      console.log("received data at boardListReducer", list, ph, status);
      state.boardList = list;
      state.ph = ph;
      state.status = status;
    },
  },
});

export const boardListAction = boardListSlice.actions;

export default boardListSlice;
