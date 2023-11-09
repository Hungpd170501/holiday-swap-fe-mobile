import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./reducers/userReducers";
import { depositReducers } from "./reducers/depositReducers";
import { searchParamReducers } from "./reducers/searchParamReducers";
import {
  apartmentDetailReducers,
  apartmentReducers,
} from "./reducers/apartmentReducers";
import { newBookingReducers } from "./reducers/bookingReducers";

export const store = configureStore({
  reducer: {
    user: userReducers,
    deposit: depositReducers,
    searchParam: searchParamReducers,
    apartments: apartmentReducers,
    apartmentDetail: apartmentDetailReducers,
    newBooking: newBookingReducers,
  },
});
