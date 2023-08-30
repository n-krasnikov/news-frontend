import { type FC } from 'react';
import { useDispatch } from 'react-redux';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { toggleModal } from '../../redux/actions/modal';
import { ModalType } from '../../vite-env';
import { IUserCard } from './UserCard.props';
import { ADD_POST_TYPE, EDIT_PROFILE_TYPE } from './constants';
import { 
  EDIT_PROFILE,
  CREATE_POST,
  AVATAR_ALT,
} from '../../locales.json';

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

  return (
    <Card className='user-card'>
      <CardMedia
        className='avatar'
        component='img'
        image={avatar || defaultImage}
        alt={AVATAR_ALT}
      />
      <CardContent className='card-content'>
        <Typography 
          gutterBottom 
          variant='h5' 
          component='div' 
          className='post-title'
        >
          {username}
        </Typography>
        <Typography variant='body2' className='post-desc'>
          {email}
        </Typography>
        <Typography variant='body2' className='post-desc'>
            Author of {postsCount} posts
        </Typography>
        {isOwnerPage && (
          <CardActions className='card-footer'>
            <Button onClick={()=> openModal(EDIT_PROFILE_TYPE)}>{EDIT_PROFILE}</Button>
            <Button onClick={() => openModal(ADD_POST_TYPE)}>{CREATE_POST}</Button>
          </CardActions>
        )}
      </CardContent>

    </Card>
  );
};
