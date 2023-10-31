import {
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "../constants/depositConstants";

export const depositReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case DEPOSIT_REQUEST:
      return { loading: true, statusDeposit: false };
    case DEPOSIT_SUCCESS:
      return {
        ...state,
        loading: false,
        statusDeposit: true,
        user: action.payload,
      };
    default:
      return state;
  }
};
