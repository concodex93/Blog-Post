import { combineReducers } from 'redux';
import postReducer from './postReducer';
import userReducer from './usersReducer';

export default combineReducers({
  post: postReducer,
  users: userReducer
});
