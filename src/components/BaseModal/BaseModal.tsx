import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { IModalState } from '../../vite-env';
import { RootState } from '../../redux/reducers/rootReducer';
import { toggleModal } from '../../redux/actions/modal';
import { AuthForm } from '../AuthForm';
import { PostForm } from '../PostForm';
import { style, SIGN } from './constants';
import { ADD_POST } from '../../locales.json';

import './BaseModal.css'

export const BaseModal = () => {
  const { isModalOpen, modalType }: IModalState = useSelector((store: RootState) => store.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleModal({status: false}));
  }

  return (
    <Fragment>    
      <Modal
        open={isModalOpen}
        onClose={handleClose}
      >
        <Box sx={style}>
          {modalType === ADD_POST && <PostForm />}
          {modalType?.includes(SIGN) && <AuthForm />}
        </Box>
      </Modal>
    </Fragment>
  );
}