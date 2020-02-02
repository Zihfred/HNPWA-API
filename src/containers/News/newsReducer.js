import types from "./actionTypes";

const initialStore = {
  news: [],
  loading: true,
  error: null
};

const newsReducer = (state = initialStore, action) => {
  switch (action.type) {
    case types.FETCH_NEWS_SUCCESS: {
      return {
        news: action.payload,
        loading: false,
        error: null,
      };
    }
    case types.FETCH_NEWS_FAILURE: {
      return {
        news: [],
        loading: false,
        error: true,
      };
    }
    case types.FETCH_NEWS_REQUEST: {
      return {
        news: [],
        loading: true,
        error: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default newsReducer;
