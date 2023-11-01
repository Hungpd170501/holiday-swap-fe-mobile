import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import { depositReducers } from "./reducers/depositReducers";

export const store = configureStore({
  reducer: { user: userReducers, deposit: depositReducers },
});
