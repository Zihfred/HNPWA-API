import types from "./actionTypes";
import API from "../../API";

const fetchNewsRequest = () => ({
  type: types.FETCH_NEWS_REQUEST
});

const fetchNewsSuccess = posts => ({
  type: types.FETCH_NEWS_SUCCESS,
  payload: posts
});

const fetchPostsFailure = () => ({
  type: types.FETCH_NEWS_FAILURE
});

export const fetchNews = pageNumber => async dispatch => {
  dispatch(fetchNewsRequest());
  API.getNews(pageNumber)
    .then(posts => dispatch(fetchNewsSuccess(posts)))
    .catch(() => dispatch(fetchPostsFailure()));
};
