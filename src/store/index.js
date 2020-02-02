import { createStore, applyMiddleware, combineReducers,compose } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import newsReducer from "../containers/News/newsReducer";
import selectedPostReducer from "../containers/SelectedPost/selectedPostReducer";

const reducer = combineReducers({
  newsReducer,
  selectedPostReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [ReduxThunk];
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}
export default function configureStore() {
  const store = createStore(reducer,composeEnhancer(applyMiddleware(...middlewares)))
  return store;
}
