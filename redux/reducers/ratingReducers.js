// reducers.js

import {
  GET_RATINGS_FAILURE,
  GET_RATINGS_REQUEST,
  GET_RATINGS_SUCCESS,
} from "../constants/ratingConstant";

const initialState = {
  ratings: [],
  loading: false,
  error: "",
};

const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATINGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_RATINGS_SUCCESS:
      return {
        loading: false,
        ratings: action.payload,
        error: "",
      };
    case GET_RATINGS_FAILURE:
      return {
        loading: false,
        ratings: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ratingsReducer;
