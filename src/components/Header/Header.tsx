import { useEffect, type FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/reducers/rootReducer';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IAuthState } from '../../vite-env';
import { TOKEN } from './constants';
import { toggleModal } from '../../redux/actions/modal';
import { verifyRequested, logout } from '../../redux/actions/auth';
import { 
  SIGN_IN, 
  SIGN_UP, 
  LOGOUT, 
  GREETING 
} from '../../locales.json'

import './Header.css'

export const Header: FC = () => {
  const buttons = [SIGN_IN, SIGN_UP];
  const { isLoggedIn, userData }: IAuthState = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();

  const openModal = (type: string) => {
    dispatch(toggleModal({ status: true, type}));
  }
  const logoutDispatch = ()=>{
    localStorage.removeItem(TOKEN);
    dispatch(logout());
  }

  useEffect(() => {
    if (isLoggedIn) dispatch(verifyRequested());
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <Toolbar className='header'>
        {isLoggedIn ? (
          <Fragment>
            <Button 
              variant="contained" 
              size="medium" 
              onClick={() => logoutDispatch()} 
              className='button'
            >
            {LOGOUT}
            </Button>
            <Typography variant="body1" className='username'>
              {GREETING}{userData?.username}
            </Typography>
          </Fragment>
        ):
          buttons.map((type: string) =>(
            <Button 
              variant="contained" 
              size="medium" 
              onClick={() => openModal(type)} 
              className='button'
              key={type}
            >
            {type}
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
}