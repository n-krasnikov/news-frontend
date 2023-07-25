import { 
  AUTH_SUCCESS,
  POST_CREATE_SUCCESS, 
  TOGGLE_MODAL, 
  USER_EDIT_RECEIVED 
} from '../actionTypes';
import { IModalState, IModalAction } from '../../vite-env';

const initialState: IModalState = {
  isModalOpen: false,
  modalType: 'Sign In',
}

const modalReducer = (state = initialState, action: IModalAction) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.status,
        modalType: action.payload.type
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        isModalOpen: false
      }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        isModalOpen: false,
      }
    case USER_EDIT_RECEIVED:
      return {
        ...state,
        isModalOpen: false,
      }
    default: return state;
  }
}

export default  modalReducer;