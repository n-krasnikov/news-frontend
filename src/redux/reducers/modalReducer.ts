import { AUTH_SUCCESS, TOGGLE_MODAL } from '../actionTypes';
import { IModalState, IModalAction } from '../../vite-env';

const initialState: IModalState = {
  isModalOpen: false,
  modalType: '',
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
    default: return state;
  }
}

export default  modalReducer;