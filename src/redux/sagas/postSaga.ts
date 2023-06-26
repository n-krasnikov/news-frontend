import { put, call, takeEvery } from "redux-saga/effects";

import getPosts from "../../api/getPosts";
import * as actionType from "../actionTypes";
import { postsFailed, postsReceived } from "../actions/posts";

function* onLoadPosts() {
  try {
    const { data } = yield call(getPosts);
    yield put(postsReceived(data));
  } catch (error: any) {
    yield put(postsFailed(error.message));
  }
}

function* watchOnLoadPosts() {
  yield takeEvery(actionType.POSTS_REQUESTED, onLoadPosts);
}

export default watchOnLoadPosts;