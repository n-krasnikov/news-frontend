import { IAuth } from "../../vite-env";
import { 
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
  AUTH_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_UP_FAILED,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  LOGOUT,
              } from '../actionTypes';

export const signUpRequested = (payload: IAuth) => ({
  type: SIGN_UP_REQUEST,
  payload
});

export const signInRequested = (payload: IAuth) => ({
  type: SIGN_IN_REQUEST,
  payload
});
  
export const authReceived = (payload: IAuth) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const signInFailed = (error: string) => ({
    type: SIGN_IN_FAILED,
    error,
});

export const signUpFailed = (error: object) => ({
  type: SIGN_UP_FAILED,
  error
});

export const verifyRequested = () => ({
  type: VERIFY_REQUEST,
});
  
export const verifyReceived = (payload: IAuth) => ({
  type: VERIFY_SUCCESS,
  payload
});

export const logout = () => ({
  type: LOGOUT,
})
