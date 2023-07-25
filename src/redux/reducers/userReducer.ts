import { ICurrentUserActions, ICurrentUserState, IPost } from '../../vite-env';
import { sortPosts } from '../../helpers';
import { 
  USER_REQUESTED, 
  USER_RECEIVED, 
  USER_FAILED,
  POST_CREATE_REQUEST, 
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILED,
  USER_EDIT_REQUESTED,
  USER_EDIT_RECEIVED,
  USER_EDIT_FAILED,
} from '../actionTypes';

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
        userPosts: sortPosts(action.payload?.posts),
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
    case POST_CREATE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userPosts: sortPosts([...state.userPosts, action.payload]),
        error: null,
      };
    case POST_CREATE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case USER_EDIT_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case USER_EDIT_RECEIVED:
      return {
        ...state,
        isLoading: false,
        error: null,
        currentUser: action.payload,
      }
    case USER_EDIT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default: return state;
  }
}
