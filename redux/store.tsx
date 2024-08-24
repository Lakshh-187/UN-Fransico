// store.jsx
import { configureStore } from "@reduxjs/toolkit";
import { toolsSlice } from "./toolsSlice";
import { hiringSlice } from "./hiring";
import { userSlice } from "./user";
import { formSlice } from "./form/buttonSlice";
import cartReducer from './features/cartSlice'; // Import the cart reducer

export const makeStore = () => {
  return configureStore({
    reducer: {
      [toolsSlice.name]: toolsSlice.reducer,
      [userSlice.name]: userSlice.reducer,
      [hiringSlice.name]: hiringSlice.reducer,
      [formSlice.name]: formSlice.reducer,
      cart: cartReducer, // Add the cart reducer here
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
