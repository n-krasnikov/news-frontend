import { type FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IPostCard } from './PostCard.props';
import * as locales from '../../locales.json';
import { style } from './constants';

import defaultImage from '../../assets/react.svg';
import './PostCard.css';

const PostCard: FC<IPostCard> = ({ 
  title,
  text,
  tags,
  image,
  author,
  authorId,
  isLoggedIn,
 }) => {

  const tagArr = tags.split(',');  
  const navigate = useNavigate();
  
  const goToUserPage = () => {
    navigate(`/users/${authorId}`);
  };

  return (
    <Card sx={style}>
      <CardMedia
        component='img'
        alt={locales.IMAGE_ALT}
        height='140'
        image={image || defaultImage}
      />
      <CardContent className='card-content'>
        {tagArr.map((tag) => <span key={tag} >{tag}</span>)}
        <Typography 
          gutterBottom 
          variant='h5' 
          component='div' 
          className='post-title'
        >
         {title}
        </Typography>
        <Typography variant='body2' className='post-desc'>
          {text}
        </Typography>
      </CardContent>
      <CardActions className='card-footer'>
        <Button 
          onClick={goToUserPage}  
          disabled={!isLoggedIn} 
          size='small'
        >
          {author}
        </Button>
        
      </CardActions>
    </Card>
  );
};

export default memo(PostCard);
