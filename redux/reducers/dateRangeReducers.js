import {
  DATE_RANGE_BOOKING_REQUEST,
  DATE_RANGE_BOOKING_SUCCESS,
  DATE_RANGE_BOOKING_FAIL,
} from "./../constants/dateRangeConstants";

export const dateRangeReducer = (state = { dateRangeBooking: {} }, action) => {
  switch (action.type) {
    case DATE_RANGE_BOOKING_REQUEST:
      return {
        dateRangeBooking: null,
        success: false,
      };
    case DATE_RANGE_BOOKING_SUCCESS:
      return {
        success: true,
        dateRangeBooking: action.payload,
      };
    case DATE_RANGE_BOOKING_FAIL:
      return {
        success: false,
        dateRangeBooking: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
