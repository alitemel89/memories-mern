import { CREATE_POST, FETCH_ALL } from "../types/actionTypes";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload,
      };

    case CREATE_POST:
      return [...state, action.payload];
    default:
      return state;
  }
};
