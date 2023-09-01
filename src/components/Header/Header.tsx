import { useEffect, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import LogInIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/PersonAdd';
import LogOutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

import { TOKEN, SIGN_IN, SIGN_UP } from './constants';
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
    <div className='header'>
      <div className='icons-block'>
        <HomeIcon onClick={goToMainPage} className='icon'/>
      </div>
        <input className='search'/>
        <div className='icons-block'>
        {isLoggedIn ? (
          <>
            <Avatar 
              onClick={goToUserPage}
              alt={userData?.username} 
              src={userData?.avatar || defaultImage}
              sx={{ width: 45, height: 45 }}
              className='avatar'
            />
            <LogOutIcon 
              className='icon'
              onClick={logoutDispatch}
            />
          </>):
          <>
            <RegisterIcon 
              className='icon'
              onClick={() => openModal(SIGN_UP)} 
            />
            <LogInIcon 
              className='icon'
              onClick={() => openModal(SIGN_IN)}
            />
          </>
        }
        </div>
    </div>
  );
};
