import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { auth } from '../../api/postAuth';
import { signInFailed, authReceived } from '../actions/auth';
import { SIGN_IN_REQUEST } from '../actionTypes';
import { IAuthActions } from '../../vite-env';

function* onSignIn({ payload }: IAuthActions ) {
  try {
    const { data } = yield call(auth, 'signin', payload);
    if (data?.access) localStorage.setItem('token', data?.access);
    yield put(authReceived(payload));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(signInFailed((error as AxiosError)?.response?.data?.detail ?? ''));
    }
  }
}

function* watchOnSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, onSignIn);
}

export default watchOnSignIn;
