import { createSlice } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export interface ITools {
  eduApps: [];
  toolsArray: [];
  reviews: [];
}

const initialState: ITools = {
  eduApps: [],
  toolsArray: [],
  reviews: [],
};

export const toolsSlice = createSlice({
  name: "tools",
  initialState,
  reducers: reducer,
});

export const toolsSliceActions = toolsSlice.actions;
