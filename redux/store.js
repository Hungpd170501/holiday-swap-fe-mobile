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
  ownerBookingReducers,
} from "./reducers/bookingReducers";
import { resortReducers } from "./reducers/resortReducers";
import { propertiesReducers } from "./reducers/propertyReducers";
import {
  newOwnershipReducers,
  ownershipReducers,
} from "./reducers/ownershipReducer";
import walletReducers from "./reducers/walletReducers";
import blogReducers from "./reducers/blogReducers";

export const store = configureStore({
  reducer: {
    user: userReducers,
    resorts: resortReducers,
    properties: propertiesReducers,
    deposit: depositReducers,
    searchParam: searchParamReducers,
    apartments: apartmentReducers,
    apartmentDetail: apartmentDetailReducers,
    newBooking: newBookingReducers,
    historyBooking: historyBookingReducers,
    ownerBooking: ownerBookingReducers,
    newOwnership: newOwnershipReducers,
    ownerships: ownershipReducers,
    wallet: walletReducers,
    blog: blogReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
