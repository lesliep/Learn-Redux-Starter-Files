import { combineReducers } form 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './Posts';
import comments from './Comments';

const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;
