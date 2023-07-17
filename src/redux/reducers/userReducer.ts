import { USER_REQUESTED, USER_RECEIVED, USER_FAILED } from '../actionTypes';
import { ICurrentUserActions, ICurrentUserState } from '../../vite-env';

const initialState: ICurrentUserState = {
 currentUser: null,
 userPosts: [],
 isLoading: false,
 error: null,
};

export default function userReducer(state: ICurrentUserState = initialState, action: ICurrentUserActions) {
  switch (action.type) {
    case USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USER_RECEIVED:
      return {
        ...state,
        currentUser: action.payload?.user,
        userPosts: action.payload?.posts,
        isLoading: false,
        error: null,
      };
    case USER_FAILED:
      return {
        ...state,
        currentUser: null,
        userPosts: [],
        isLoading: false,
        error: action.error,
      };
    default: return state;
  }
}
