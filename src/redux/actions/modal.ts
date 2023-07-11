import { IModal, IModalState } from "../../vite-env";
import { TOGGLE_MODAL } from "../actionTypes";

export const toggleModal = (payload: IModal) => ({
  type: TOGGLE_MODAL,
  payload
});