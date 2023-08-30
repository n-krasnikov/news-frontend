import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { verify } from '../../api/postAuth';
import { signInFailed, verifyReceived } from '../actions/auth';
import { VERIFY_REQUEST } from '../actionTypes';

function* onVerify() {
  try {
    const { data } = yield call(verify);
    yield put(verifyReceived(data));
    
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(signInFailed((error as AxiosError).message));
    }
  }
}

function* watchOnVerify() {
  yield takeEvery(VERIFY_REQUEST, onVerify);
}

export default watchOnVerify;
