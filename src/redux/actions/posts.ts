import { IPost, IPostCreate } from "../../vite-env";
import { 
  POSTS_REQUESTED, 
  POSTS_RECEIVED, 
  POSTS_FAILED, 
  POST_CREATE_REQUEST, 
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILED,
} from '../actionTypes';

export const postsRequest = () => ({
  type: POSTS_REQUESTED,
});
  
export const postsReceived = (payload: IPost) => ({
  type: POSTS_RECEIVED,
  payload,
});

export const postsFailed = (error: string) => ({
  type: POSTS_FAILED,
  error,
});

export const postCreate = (payload: IPostCreate) => ({
  type: POST_CREATE_REQUEST,
  payload,
})

export const postCreated = (payload: IPost) => ({
  type: POST_CREATE_SUCCESS,
  payload,
});

export const postCreateFailed = (error: string) => ({
  type: POST_CREATE_FAILED,
  error,
});