import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import { createPost } from '../../api/createPost';
import * as actionType from '../actionTypes';
import { postCreateFailed, postCreateSuccess } from '../actions/posts';
import { IPostCreateAction } from '../../vite-env';

function* CreatePost({payload}: IPostCreateAction) {
  try {
    const { data } = yield call(createPost, payload);
    yield put(postCreateSuccess(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(postCreateFailed((error as AxiosError)?.response?.data?.detail ?? ''));
    }
  }
}

function* watchCreatePost() {
  yield takeEvery(actionType.POST_CREATE_REQUEST, CreatePost);
}

export default watchCreatePost;