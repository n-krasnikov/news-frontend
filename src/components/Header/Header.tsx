import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { toggleModal } from '../../redux/actions/modal';
import { verifyRequested, logout } from '../../redux/actions/auth';
import { SIGN_IN, SIGN_UP } from '../../locales.json'

import './Header.css'
import { IAuthState } from '../../vite-env';
import { RootState } from '../../redux/reducers/rootReducer';

export const Header: FC = () => {
  const buttons = [SIGN_IN, SIGN_UP];
  const { isLoggedIn, userData }: IAuthState = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  const openModal = (type: string) => {
    dispatch(toggleModal({ status: true, type}));
  }
  const logoutDispatch = ()=>{
    localStorage.removeItem('token');
    dispatch(logout());
  }

  useEffect(() => {
    if (isLoggedIn) dispatch(verifyRequested());
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <Toolbar className='header'>
        {isLoggedIn ? (
          <>
          <Button 
            variant="contained" 
            size="medium" 
            onClick={() => logoutDispatch()} 
            className='button'
            key='logout'
          >
          Log Out
          </Button>
          <Typography variant="body1" className='username'>
            Hello, {userData?.username}
          </Typography>
          </>
        ):
          buttons.map((type: string) =>(
            <Button 
              variant="contained" 
              size="medium" 
              onClick={() => openModal(type)} 
              className='button'
              key={type}
            >
            { type }
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}