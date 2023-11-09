import {
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAIL,
  CREATE_BOOKING_RESET,
} from "../constants/bookingConstants";

export const newBookingReducers = (state = { booking: {} }, action) => {
  switch (action.type) {
    case CREATE_BOOKING_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_BOOKING_SUCCESS:
      return {
        loading: false,
        success: true,
        booking: action.payload,
      };

    case CREATE_BOOKING_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case CREATE_BOOKING_RESET:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};
