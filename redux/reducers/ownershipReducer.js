import {
  CREATE_OWNERSHIP_REQUEST,
  CREATE_OWNERSHIP_SUCCESS,
  CREATE_OWNERSHIP_FAIL,
  CREATE_OWNERSHIP_RESET,
} from "../constants/ownershipConstants";

export const newOwnershipReducers = (state = { ownership: {} }, action) => {
  switch (action.type) {
    case CREATE_OWNERSHIP_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_OWNERSHIP_SUCCESS:
      return {
        loading: false,
        success: true,
        ownership: action.payload,
      };

    case CREATE_OWNERSHIP_FAIL:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };

    case CREATE_OWNERSHIP_RESET:
      return {
        ...state,
        loading: true,
        success: false,
        ownership: null,
      };

    default:
      return state;
  }
};
