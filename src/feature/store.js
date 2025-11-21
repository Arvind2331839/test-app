import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slice/viewSlice";
import userReducer from "./slice/userSlice"; 

export const store = configureStore({
  reducer: {
    view: viewReducer,
    user: userReducer,
  },
});
