import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosError } from "axios";

import getUser from "../../api/getUser";
import { USER_REQUESTED } from "../actionTypes";
import { userFailed, userReceived } from "../actions/user";
import { ICurrentUserActions } from "../../vite-env";

function* onLoadUser({ payload }: ICurrentUserActions) {
 
  try {
    const { data } = yield call(getUser, payload);
    yield put(userReceived(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(userFailed((error as AxiosError)?.response));
    }
  }
}

function* watchOnLoadUser() {
  yield takeEvery(USER_REQUESTED, onLoadUser);
}

export default watchOnLoadUser;