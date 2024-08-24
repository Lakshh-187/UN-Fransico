import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageData: {},
};

export const hiringSlice = createSlice({
  name: "getHired",
  initialState,
  reducers: {
    setPageData(state, action) {
      state.pageData = action.payload;
    },
  },
});

export const hiringActions = hiringSlice.actions;
