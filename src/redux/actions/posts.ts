import { IPost } from "../../vite-env";
import  * as actionTypes from '../actionTypes';

export const postsRequest = () => ({
  type: actionTypes.POSTS_REQUESTED
});
  
export const postsReceived = (payload: IPost) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload
});

export const postsFailed = (error: string) => ({
    type: actionTypes.POSTS_FAILED,
    error
});