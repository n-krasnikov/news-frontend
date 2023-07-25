import {
  SIGN_UP_REQUEST, 
  SIGN_IN_REQUEST,
  AUTH_SUCCESS, 
  SIGN_IN_FAILED,
  SIGN_UP_FAILED,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  LOGOUT,
  TOGGLE_MODAL,
  USER_EDIT_RECEIVED,
} from '../actionTypes';
import { IAuthActions, IAuthState } from '../../vite-env';

const initialState: IAuthState = {
  userData: null,
  isLoading: false,
  isLoggedIn: Boolean(localStorage.getItem('token')),
  error: null,
  authErrors: null,
};


export default function authReducer(state: IAuthState = initialState, action: IAuthActions) {
  switch (action.type) {
    case SIGN_UP_REQUEST:    
    case SIGN_IN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case VERIFY_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
        error: null,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        authErrors: action.error,
      };
    case SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        userData: null,
        isLoggedIn: false,
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        error: null,
        authErrors: null,
      }
    case USER_EDIT_RECEIVED:
      return {
        ...state,
        userData: action.payload,
        isLoading: false,
        error: null,
      }
    default: return state;
  }
}
