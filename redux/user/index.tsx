import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  userData: {
    displayName:String,
email:String,
isMember:boolean,
photoUrl:String,
uid:String,

  };
}

const initialState: IUser = {
  userData: {
    displayName:"",
email:"",
isMember:false,
photoUrl:"",
uid:"",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    clearUserData(state) {
      state.userData = {
        displayName:"",
        email:"",
        isMember:false,
        photoUrl:"",
        uid:"",
      };
    },
    setMemberStatus(state, action: PayloadAction<boolean>) {
      state.userData.isMember = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;
