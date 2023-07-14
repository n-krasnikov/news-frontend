import { ICurrentUser } from "../../vite-env";
import { USER_REQUESTED, USER_RECEIVED, USER_FAILED } from '../actionTypes';

export const userRequest = (payload: string) => ({
  type: USER_REQUESTED,
  payload,
});
  
export const userReceived = (payload: ICurrentUser) => ({
  type: USER_RECEIVED,
  payload,
});

export const userFailed = (error: any) => ({
    type: USER_FAILED,
    error,
});