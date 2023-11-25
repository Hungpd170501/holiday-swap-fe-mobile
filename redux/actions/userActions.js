import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../constants/userConstants";
import * as SecureStore from "expo-secure-store";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = { headers: { "Content-type": "application/json" } };
    const { data } = await axios.post(
      "https://holiday-swap.click/api/v1/auth/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    let token;
    await SecureStore.getItemAsync("secure_token").then((value) => {
      token = value;
    });

    // console.log("Check token", token);

    const config = { headers: { Authorization: `Bearer ${token}` } };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/users/profile`,
      config
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

//update profile

export const updateProfile = (userData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    let token;
    await SecureStore.getItemAsync("secure_token").then((value) => {
      token = value;
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append("avatar", {
      uri: userData.avatar["0"]["uri"] ?? userData.avatar,
      type: "image/jpeg",
      name: "avatar.jpg",
    });
    formData.append("fullName", userData.fullName);
    formData.append("gender", userData.gender);
    formData.append("dob", userData.dob);

    console.log("Check userdata", formData);

    const data = await axios
      .put("https://holiday-swap.click/api/v1/users/profile", formData, config)
      .then((response) => {
        console.log("Success", response);
      })
      .catch((response) => {
        console.log("Check erro put", response);
      });

    console.log("check data", data);

    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("Check error update", error);
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};
