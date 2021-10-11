import { CREATE_POST, FETCH_ALL, UPDATE_POST } from "../types/actionTypes.js";

// Get logs from server
export const getPosts = () => async dispatch => {
  try {

    const res = await fetch('/posts');
    const data = await res.json();

    dispatch({
      type: FETCH_ALL,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Add new log
export const createPost = post => async dispatch => {
  try {

    const res = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({
      type: CREATE_POST,
      payload: data
    });
  } catch (err) {
    console.log(err.message);
  }
};

// Update a post
export const updatePost = (id, post) => async dispatch => {
  try {

    const res = await fetch(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    dispatch({ type: UPDATE_POST, payload: data });

  } catch (err) {
    console.log(err.message);
  }
};
