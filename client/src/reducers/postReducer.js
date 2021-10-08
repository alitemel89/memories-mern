import { CREATE_POST, FETCH_ALL } from "../types/actionTypes";

const initialState = {
  posts: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };

    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    default:
      return state;
  }
};
