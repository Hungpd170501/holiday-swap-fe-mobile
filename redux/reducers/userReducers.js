import { useReducer } from "react";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_TOKEN_EXP_REQUEST,
  LOAD_TOKEN_EXP_SUCCESS,
  LOAD_TOKEN_EXP_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
} from "../constants/userConstants";

export const userReducers = (state = { user: {}, userProfile: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return { loading: true, isAuthenticated: false };

    // Gửi login request, chưa đăng nhập nên authen = false

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        userProfile: action.payload,
      };

    case LOGIN_FAIL:
      return {
        loading: false,
        isAuthenticated: flase,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        userProfile: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const tokenReducers = (state = { token: {} }, action) => {
  switch (action.type) {
    case LOAD_TOKEN_EXP_REQUEST:
      return {
        loading: true,
      };

    case LOAD_TOKEN_EXP_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload,
      };

    case LOAD_TOKEN_EXP_FAIL:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload,
      };

    default:
      return state;
  }
};
// update profile

export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_PROFILE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    default:
      return state;
  }
};
