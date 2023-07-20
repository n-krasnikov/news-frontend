import { put, call, takeEvery } from "redux-saga/effects";
import { AxiosError } from "axios";

import { postPost } from "../../api/postPost";
import * as actionType from "../actionTypes";
import { postCreateFailed, postCreateSuccess } from "../actions/posts";
import { IPostCreateAction } from "../../vite-env";

function* onCreatePost({payload}: IPostCreateAction) {
  try {
    const { data } = yield call(postPost, payload);
    yield put(postCreateSuccess(data));
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(postCreateFailed((error as AxiosError)?.response?.data?.detail  ?? ''));
    }
  }
}

function* watchOnCreatePost() {
  yield takeEvery(actionType.POST_CREATE_REQUEST, onCreatePost);
}

export default watchOnCreatePost;