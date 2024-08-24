import { auth } from "@/config/firebase";
import { userSliceActions } from "@/redux/user";
import { getUser, getUserProfile } from "@/services/firestore";
import { Dispatch } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";

export function verifyAuth() {
  return function (dispatch: Dispatch) {
    return onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUser(user.uid);
        dispatch(userSliceActions.setUserData(userData));
      } else {
        dispatch(userSliceActions.setUserData({}));
      }
    });
  };
}
