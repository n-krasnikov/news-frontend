import { useEffect, type FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IAuthState } from '../../vite-env';
import { TOKEN } from './constants';
import { toggleModal } from '../../redux/actions/modal';
import { RootState } from '../../redux/reducers/rootReducer';
import { verifyRequested, logout } from '../../redux/actions/auth';
import HomeIcon from '@mui/icons-material/Home';
import LogOutIcon from '@mui/icons-material/DirectionsRun';
import Avatar from '@mui/material/Avatar';
import { 
  SIGN_IN, 
  SIGN_UP, 
  LOGOUT, 
  GREETING,
} from '../../locales.json'

import './Header.css'
import defaultImage from '../../assets/react.svg';

export const Header: FC = () => {
  const buttons = [SIGN_IN, SIGN_UP];
  const { isLoggedIn, userData }: IAuthState = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = (type: string) => {
    dispatch(toggleModal({ status: true, type}));
  }
  const logoutDispatch = ()=>{
    localStorage.removeItem(TOKEN);
    dispatch(logout());
    navigate('/');
  }

  const goToMainPage = () => {
    navigate('/');
  }

  const goToUserPage = () => {
    navigate(`/users/${userData?.id}`)
  }

  useEffect(() => {
    if (isLoggedIn) dispatch(verifyRequested());
  }, [isLoggedIn]);

  return (
    <AppBar position="static">
      <Toolbar className='header'>
        <HomeIcon onClick={goToMainPage} className='icon'/>
          <div className='auth-block'>
          {isLoggedIn ? (
            <Fragment>
              <Avatar 
                onClick={goToUserPage}
                alt={userData?.username} 
                src={userData?.avatar || defaultImage} 
                className='icon avatar'
                />
              <LogOutIcon 
                className='icon'
                onClick={logoutDispatch}
                />
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
          </div>
      </Toolbar>
    </AppBar>
  );
}