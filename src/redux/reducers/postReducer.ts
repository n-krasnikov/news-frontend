import { POSTS_REQUESTED, POSTS_RECEIVED, POSTS_FAILED } from '../actionTypes';
import { IPostActions, IPostState } from '../../vite-env';

const initialState: IPostState = {
 posts: [],
 isLoading: false,
 error: null,
};


export default function postReducer(state: IPostState = initialState, action: IPostActions) {
 switch (action.type) {
   case POSTS_REQUESTED:
     return {
       ...state,
       isLoading: true,
       error: null,
     };
   case POSTS_RECEIVED:
     return {
       ...state,
       isLoading: false,
       posts: action.payload,
       error: null,
     };
   case POSTS_FAILED:
     return {
       ...state,
       isLoading: false,
       posts: [],
       error: action.error,
     };
   default: return state;
 }
}
