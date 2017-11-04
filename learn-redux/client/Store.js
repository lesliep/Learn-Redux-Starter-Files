import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/Index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  posts,
  comments
};

const store = createStore(rootReducer, defaultState);

export default store;
export const history = syncHistoryWithStore(browserHistory, store);

