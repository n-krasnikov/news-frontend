import { combineReducers } from 'redux';

import postReducer from './postReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
  auth: authReducer,
  user: userReducer,
 });

 export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
