import {
  GET_APARTMENT_REQUEST,
  GET_APARTMENT_SUCCESS,
  GET_APARTMENT_FAIL,
  APARTMENT_DETAIL_REQUEST,
  APARTMENT_DETAIL_SUCCESS,
  APARTMENT_DETAIL_FAIL,
} from "../constants/apartmentConstants";
import axios from "axios";

export const getApartments = () => async (dispatch) => {
  try {
    dispatch({ type: GET_APARTMENT_REQUEST });

    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=100&sortBy=id&sortDirection=asc`,
      config
    );

    dispatch({ type: GET_APARTMENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_APARTMENT_FAIL, payload: error });
  }
};

export const getAparmentDetail = (availableId) => async (dispatch) => {
  try {
    dispatch({ type: APARTMENT_DETAIL_REQUEST });

    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/apartment-for-rent/${availableId}`
    );

    dispatch({ type: APARTMENT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: APARTMENT_DETAIL_FAIL,
      payload: error.resposne.data.message,
    });
  }
};
