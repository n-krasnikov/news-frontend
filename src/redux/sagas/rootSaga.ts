import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import postCreateSaga from './postCreateSaga';
import signUpSaga from './signUpSaga';
import signInSaga from './signInSaga';
import verifySaga from './verifySaga';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([
    postSaga(),
    postCreateSaga(),
    signUpSaga(),
    signInSaga(),
    verifySaga(),
    userSaga(),
  ]);
}

export default rootSaga;
