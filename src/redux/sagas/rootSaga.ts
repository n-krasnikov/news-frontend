import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import signUpSaga from './signUpSaga';
import signInSaga from './signInSaga';
import verifySaga from './verifySaga';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([
    postSaga(),
    signUpSaga(),
    signInSaga(),
    verifySaga(),
    userSaga(),
  ]);
}

export default rootSaga;
