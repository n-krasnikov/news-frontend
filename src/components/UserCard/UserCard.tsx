import { type FC } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ProfileEditIcon from '@mui/icons-material/AppRegistration';

import { toggleModal } from '../../redux/actions/modal';
import { ModalType } from '../../vite-env';
import { IUserCard } from './UserCard.props';
import { ADD_POST_TYPE, EDIT_PROFILE_TYPE } from './constants';

import defaultImage from '../../assets/react.svg';
import './UserCard.css';

export const UserCard: FC<IUserCard> = ({
  email,
  username,
  avatar,
  postsCount,
  isOwnerPage,
}) => {
  const dispatch = useDispatch();

  const openModal = (type: ModalType) => {
    dispatch(toggleModal({ status: true, type}));
  };

  const postsInfo = postsCount
    ? `Author of ${postsCount} posts`
    : 'No posts';

  return (
    <>
    <div className='user-card'>
      <Avatar 
        src={avatar || defaultImage}
        className='user-card-avatar'
      />
      <div className='user-card-info'>
        <h3>{username}</h3>
        <span>{postsInfo}</span>
        <span>{email}</span>
      </div>
      {isOwnerPage && 
        (<div className='user-card-actions'>
          <PostAddIcon onClick={()=> openModal(EDIT_PROFILE_TYPE)}/>
          <ProfileEditIcon onClick={()=> openModal(ADD_POST_TYPE)}/>
        </div>)
      }
    </div>
    </>
  );
};
