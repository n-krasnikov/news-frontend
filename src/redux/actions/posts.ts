import { IPost } from "../../vite-env";
import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../actionTypes';

export const postsRequest = () => ({
  type: POSTS_REQUESTED
});
  
export const postsReceived = (payload: IPost) => ({
  type: POSTS_RECEIVED,
  payload
});

export const postsFailed = (error: string) => ({
    type: POSTS_FAILED,
    error
});