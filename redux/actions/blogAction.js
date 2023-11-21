import axios from "axios";
import {
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "../constants/blogConstants";
import * as SecureStore from "expo-secure-store";

export const getBlogRequest = () => ({
  type: GET_BLOG_REQUEST,
});

export const getBlogSuccess = (data) => ({
  type: GET_BLOG_SUCCESS,
  payload: data,
});

export const getBlogFail = (error) => ({
  type: GET_BLOG_FAIL,
  payload: error,
});

export const getBlog = () => {
  return async (dispatch) => {
    dispatch(getBlogRequest());

    try {
      let token;
      await SecureStore.getItemAsync("secure_token").then((value) => {
        token = value;
      });

      const response = await axios.get(
        "https://holiday-swap.click/api/post/get",
        {
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(getBlogSuccess(response.data));
    } catch (error) {
      dispatch(getBlogFail(error.message));
    }
  };
};
