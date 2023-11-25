import axios from "axios";
import {
  GET_BLOG_DETAIL_FAIL,
  GET_BLOG_DETAIL_REQUEST,
  GET_BLOG_DETAIL_SUCCESS,
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

export const getBlogDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_BLOG_DETAIL_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/post/get/${id}`,
      config
    );
    console.log("check data", data);

    dispatch({
      type: GET_BLOG_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BLOG_DETAIL_FAIL,
      payload: error.response.data.message,
    });
    console.log("check eror", error);
  }
};

export const likePost = (postId, userId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST });

    const { data } = await axios.put(
      `${HOST_URL}/post/react?postId=${postId}&reaction=likes`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userId}`,
        },
      }
    );

    console.log("likePost success, data:", data);

    dispatch({ type: LIKE_POST_SUCCESS, payload: data.likes });
  } catch (error) {
    console.error("likePost error:", error.response.data.message);
    dispatch({ type: LIKE_POST_FAIL, payload: error.response.data.message });
  }
};

// export const dislikePost = (postId, userId) => async (dispatch) => {
//   try {
//     dispatch({ type: DISLIKE_POST_REQUEST });

//     const { data } = await axios.post(
//       `${HOST_URL}/post/like/unlike/${postId}`,
//       userId
//     );

//     dispatch({ type: DISLIKE_POST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: DISLIKE_POST_FAIL, payload: error.response.data.message });
//   }
// };
