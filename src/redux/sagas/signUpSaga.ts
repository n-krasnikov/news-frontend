import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosError } from "axios";

import { auth } from "../../api/postAuth";
import { signUpFailed, signInRequested } from "../actions/auth";
import { SIGN_UP_REQUEST } from "../actionTypes";
import { IAuthActions } from "../../vite-env";

function* onRegistration({ payload }: IAuthActions ) {
  try {
    yield call(auth, 'signup', payload);
    yield put(signInRequested(payload));    
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(signUpFailed((error as AxiosError)?.response?.data  ?? {}));
    }
  }
}

function* watchOnRegistration() {
  yield takeEvery(SIGN_UP_REQUEST, onRegistration);
}

export default watchOnRegistration;