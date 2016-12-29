import {combineReducers} from 'redux';
import postsReducer from './posts';
import showReducer from './show'


const rootReducer=combineReducers({
  posts:postsReducer,
  show:showReducer
});
export default rootReducer;
