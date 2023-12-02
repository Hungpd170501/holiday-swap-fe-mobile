import {
  DATE_RANGE_BOOKING_REQUEST,
  DATE_RANGE_BOOKING_SUCCESS,
  DATE_RANGE_BOOKING_FAIL,
} from "./../constants/dateRangeConstants";

export const getDateRangeBooking = (dateRange) => async (dispatch) => {
  try {
    dispatch({ type: DATE_RANGE_BOOKING_REQUEST });

    dispatch({ type: DATE_RANGE_BOOKING_SUCCESS, payload: dateRange });
  } catch (error) {
    dispatch({
      type: DATE_RANGE_BOOKING_FAIL,
      payload: "Cannot set date range",
    });
  }
};
