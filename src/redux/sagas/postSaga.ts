import { put, call, takeEvery } from 'redux-saga/effects';
import { AxiosError } from 'axios';

import getPosts from '../../api/getPosts';
import * as actionType from '../actionTypes';
import { postsFailed, postsReceived } from '../actions/posts';

function* onLoadPosts() {
  try {
    const { data } = yield call(getPosts);
    yield put(postsReceived(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(postsFailed((error as AxiosError).message));
    }
  }
}

function* watchOnLoadPosts() {
  yield takeEvery(actionType.POSTS_REQUESTED, onLoadPosts);
}

export default watchOnLoadPosts;