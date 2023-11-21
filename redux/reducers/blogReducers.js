import {
  GET_BLOG_FAIL,
  GET_BLOG_REQUEST,
  GET_BLOG_SUCCESS,
} from "../constants/blogConstants";

const initialState = {
  listBlog: [],
  error: null,
};

const blogReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOG_REQUEST:
      return {
        ...state,
        listBlog: [],
        error: null,
      };
    case GET_BLOG_SUCCESS:
      return {
        ...state,
        listBlog: action.payload,
        error: null,
      };
    case GET_BLOG_FAIL:
      return {
        ...state,
        listBlog: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducers;
