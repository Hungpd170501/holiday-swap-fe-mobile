import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
} from "../constants/userConstants";

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST }); // Bắn cái action login request
    const config = { headers: { "Content-type": "application/json" } }; // quy định kiểu dữ liệu mà gửi xuống BE
    const { data } = await axios.post(
      "https://holiday-swap.click/api/v1/auth/login", // dùng axios gọi API với link Login
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data }); // login thành công, data trả về (payload)
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message }); // login không thành công,
  }
};

//load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/users/profile`
    );

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};
