import { type FC } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IUserCard } from './UserCard.props';
import { 
  EDIT_PROFILE,
  CREATE_POST,
} from '../../locales.json'

import defaultImage from '../../assets/react.svg';
import './UserCard.css';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/actions/modal';

export const UserCard: FC<IUserCard> = ({
  email,
  username,
  avatar,
  postsCount,
  isOwnerPage,
}) => {
  const dispatch = useDispatch();

  const openModal = (type: string) => {
    dispatch(toggleModal({ status: true, type}));
  }

  const type = "Add post";

  return (
    <Card className='user-card'>
      <CardMedia
        className='avatar'
        component="img"
        image={avatar || defaultImage}
        alt="Live from space album cover"
      />
      <CardContent className='card-content'>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          className='post-title'
        >
          {username}
        </Typography>
        <Typography variant="body2" className='post-desc'>
          {email}
        </Typography>
        <Typography variant="body2" className='post-desc'>
            Author of {postsCount} posts
        </Typography>
        {isOwnerPage && (
          <CardActions className='card-footer'>
            <Button>{EDIT_PROFILE}</Button>
            <Button onClick={() => openModal(type)}>{CREATE_POST}</Button>
          </CardActions>
        )}
      </CardContent>

    </Card>
  );
}