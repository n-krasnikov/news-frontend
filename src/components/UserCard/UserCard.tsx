import { type FC } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IUserCard } from './UserCard.props';

import defaultImage from '../../assets/react.svg';
import './UserCard.css';

export const UserCard: FC<IUserCard> = ({
  email,
  username,
  avatar,
  postsCount,
  isOwnerPage,
}) => {
  return (
    <Card className='user-card'>
      <CardMedia
        className='avatar'
        component="img"
        sx={{ width: 150, borderRadius: 5 }}
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
            <Button>Edit Profile</Button>
            <Button>Write Post</Button>
          </CardActions>
        )}
      </CardContent>

    </Card>
  );
}