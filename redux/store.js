import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import { depositReducers } from "./reducers/depositReducers";
import { searchParamReducers } from "./reducers/searchParamReducers";

export const store = configureStore({
  reducer: { user: userReducers, deposit: depositReducers, searchParam: searchParamReducers },
});
