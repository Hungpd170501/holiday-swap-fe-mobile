import axios from "axios";
import {
  GET_RATINGS_FAILURE,
  GET_RATINGS_REQUEST,
  GET_RATINGS_SUCCESS,
} from "../constants/ratingConstant";

const apiUrl = "https://holiday-swap.click/api/v1/rating";

export const fetchRatingsRequest = () => {
  return {
    type: GET_RATINGS_REQUEST,
  };
};

export const fetchRatingsSuccess = (ratings) => {
  return {
    type: GET_RATINGS_SUCCESS,
    payload: ratings,
  };
};

export const fetchRatingsFailure = (error) => {
  return {
    type: GET_RATINGS_FAILURE,
    payload: error,
  };
};

export const fetchRatings = (
  propertyId,
  roomId,
  pageNo,
  pageSize,
  sortDirection,
  sortBy,
  token
) => {
  return (dispatch) => {
    dispatch(fetchRatingsRequest());
    axios
      .get(
        `${apiUrl}?propertyId=${propertyId}&roomId=${roomId}&pageNo=${pageNo}&pageSize=${pageSize}&sortDirection=${sortDirection}&sortBy=${sortBy}`,
        {
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const ratings = response.data.content;
        dispatch(fetchRatingsSuccess(ratings));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchRatingsFailure(errorMsg));
      });
  };
};
