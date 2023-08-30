import { ICurrentUser, IEditUser } from '../../vite-env';
import { 
  USER_REQUESTED, 
  USER_RECEIVED, 
  USER_FAILED,
  USER_EDIT_REQUESTED,
  USER_EDIT_RECEIVED,
  USER_EDIT_FAILED,
 } from '../actionTypes';

export const userRequest = (payload: string) => ({
  type: USER_REQUESTED,
  payload,
});
  
export const userReceived = (payload: ICurrentUser) => ({
  type: USER_RECEIVED,
  payload,
});

export const userFailed = (error: object) => ({
  type: USER_FAILED,
  error,
});

export const userEditRequested = (payload: IEditUser) => ({
  type: USER_EDIT_REQUESTED,
  payload,
});

export const userEditReceived = (payload: ICurrentUser) => ({
  type: USER_EDIT_RECEIVED,
  payload,
});

export const userEditFailed = (error: string) => ({
  type: USER_EDIT_FAILED,
  error,
});
