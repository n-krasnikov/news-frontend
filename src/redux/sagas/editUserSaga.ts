import { put, call, takeEvery, select } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { editUser } from '../../api/editUser';
import * as actionType from '../actionTypes';
import { userEditFailed, userEditReceived } from '../actions/user'
import { IEditUser, IEditUserAction } from '../../vite-env';
import { RootState } from '../reducers/rootReducer';

function* editProfile({ payload }: IEditUserAction) {
  try {
    const { userData: { id } } = yield select((state: RootState) => state.auth);
    const { data } = yield call(editUser, id, payload as IEditUser);
    yield put(userEditReceived(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(userEditFailed((error as AxiosError)?.response?.data?.detail ?? ''));
    }
  }
}

function* watchEditUser() {
  yield takeEvery(actionType.USER_EDIT_REQUESTED, editProfile);
}

export default watchEditUser;