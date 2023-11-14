import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import { depositReducers } from "./reducers/depositReducers";
import { searchParamReducers } from "./reducers/searchParamReducers";
import {
  apartmentDetailReducers,
  apartmentReducers,
} from "./reducers/apartmentReducers";
import {
  historyBookingReducers,
  newBookingReducers,
} from "./reducers/bookingReducers";

export const store = configureStore({
  reducer: {
    user: userReducers,
    deposit: depositReducers,
    searchParam: searchParamReducers,
    apartments: apartmentReducers,
    apartmentDetail: apartmentDetailReducers,
    newBooking: newBookingReducers,
    historyBooking: historyBookingReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
