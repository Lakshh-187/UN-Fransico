import { PayloadAction } from "@reduxjs/toolkit";
import { ITools } from ".";

export const reducer = {
  setEduApps(state: ITools, action: PayloadAction<any>) {
    state.eduApps = action.payload;
  },
  setToolsApp(state: ITools, action: PayloadAction<any>) {
    state.toolsArray = action.payload;
  },
  setReviews(state: ITools, action: PayloadAction<any>) {
    state.reviews = action.payload;
  },
};
