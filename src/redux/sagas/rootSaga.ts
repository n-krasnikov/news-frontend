import { all } from 'redux-saga/effects';

import postSaga from './postSaga';
import signUpSaga from './signUpSaga';
import signInSaga from './signInSaga';
import verifySaga from './verifySaga';

function* rootSaga() {
  yield all([
    postSaga(),
    signUpSaga(),
    signInSaga(),
    verifySaga(),
  ]);
}

export default rootSaga;
