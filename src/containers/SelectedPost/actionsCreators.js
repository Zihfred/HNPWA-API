import types from "./actionTypes";
import API from '../../API';

const fetchSelectedPostRequest = () => ({
  type: types.FETCH_SELECTED_POST_REQUEST
});

const fetchSelectedPostSuccess = (posts) => ({
  type: types.FETCH_SELECTED_POST_SUCCESS,
  payload: posts
});

const fetchSelectedPostFailure = () => ({
  type: types.FETCH_SELECTED_POST_FAILURE
});

export const fetchSelectedPost = (postId) => async (dispatch) => {
  dispatch(fetchSelectedPostRequest());
  API.getSelectedPost(postId)
    .then((posts) => dispatch(fetchSelectedPostSuccess(posts)))
    .catch(()=>dispatch(fetchSelectedPostFailure()));
};
