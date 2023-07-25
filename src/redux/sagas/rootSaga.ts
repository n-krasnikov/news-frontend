import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import postCreateSaga from './postCreateSaga';
import signUpSaga from './signUpSaga';
import signInSaga from './signInSaga';
import verifySaga from './verifySaga';
import userSaga from './userSaga';
import userEditSaga from './editUserSaga';

function* rootSaga() {
  yield all([
    postSaga(),
    postCreateSaga(),
    signUpSaga(),
    signInSaga(),
    verifySaga(),
    userSaga(),
    userEditSaga(),
  ]);
}

export default rootSaga;
