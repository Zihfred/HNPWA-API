import types from './actionTypes';

const initialStore = {
  post: [],
  loading: true,
  error: null,
};

const selectedPostReducer = (state = initialStore, action) => {
  switch (action.type) {
    case types.FETCH_SELECTED_POST_SUCCESS: {
      return {
        post: action.payload,
        loading: false,
        error: null,
      }
    }
    case types.FETCH_SELECTED_POST_FAILURE: {
      return {
        post: [],
        loading: false,
        error: true,
      }
    }
    case types.FETCH_SELECTED_POST_REQUEST: {
      return {
        post: [],
        loading: true,
        error: false,
      }
    }
    default: {
      return state
    }
  }
};

export default selectedPostReducer;
