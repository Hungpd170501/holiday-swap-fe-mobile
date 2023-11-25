import axios from "axios";
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../constants/signupConstants";

const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signup = (userData) => {
  return async (dispatch) => {
    dispatch(signupRequest());

    try {
      const response = await axios.post(
        "https://holiday-swap.click/api/v1/auth/register",
        userData,
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        dispatch(signupSuccess());
      } else {
        dispatch(signupFailure(response.data.message));
      }
    } catch (error) {
      dispatch(signupFailure(error.message));
    }
  };
};
