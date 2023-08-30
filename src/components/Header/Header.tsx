import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LogOutIcon from '@mui/icons-material/DirectionsRun';
import HomeIcon from '@mui/icons-material/Home';

import { TOKEN, BUTTONS } from './constants';
import defaultImage from '../../assets/react.svg';
import { IAuthState, ModalType } from '../../vite-env';
import { toggleModal } from '../../redux/actions/modal';
import { RootState } from '../../redux/reducers/rootReducer';
import { verifyRequested, logout } from '../../redux/actions/auth';

import './Header.css';

export const Header: FC = () => {
  const { isLoggedIn, userData }: IAuthState = useSelector((store: RootState) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = (type: ModalType) => {
    dispatch(toggleModal({ status: true, type}));
  };
  
  const goToMainPage = () => {
    navigate('/');
  };

  const goToUserPage = () => {
    navigate(`/users/${userData?.id}`);
  };

  const logoutDispatch = ()=>{
    localStorage.removeItem(TOKEN);
    dispatch(logout());
    goToMainPage();
  };

  useEffect(() => {
    if (isLoggedIn) dispatch(verifyRequested());
  }, [isLoggedIn]);

  return (
    <AppBar position='static'>
      <Toolbar className='header'>
        <HomeIcon onClick={goToMainPage} className='icon'/>
          <div className='auth-block'>
          {isLoggedIn ? (
            <>
              <Avatar 
                onClick={goToUserPage}
                alt={userData?.username} 
                src={userData?.avatar || defaultImage} 
              />
              <LogOutIcon 
                className='icon'
                onClick={logoutDispatch}
              />
            </>):
            BUTTONS.map((type: ModalType) =>(
              <Button 
                variant='contained' 
                size='medium' 
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
};
