import { combineReducers } from 'redux';

import postReducer from './postReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  modal: modalReducer,
  auth: authReducer,
 });

 export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
