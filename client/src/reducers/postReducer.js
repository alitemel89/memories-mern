import { CREATE_POST, DELETE_POST, FETCH_ALL, LIKE_POST, UPDATE_POST } from "../types/actionTypes";

const initialState = {
  posts: null
};

// eslint-disable-next-line
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
      };

    case UPDATE_POST:
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.payload._id ? action.payload : post)
      }

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };

    default:
      return state;
  }
};
