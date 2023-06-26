import { type FC, memo } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IPostCard } from './PostCard.props';
import * as locales from '../../locales.json';
import defaultImage from '../../assets/react.svg';

const cardStyle: object = { "width": 425 };

const PostCard: FC<IPostCard> = ({ 
  title,
  text,
  tags,
  image,
  author,
 }) => {

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        alt={locales.IMAGE_ALT}
        height="140"
        image={image || defaultImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{tags}</Button>
        <Button size="small">{author}</Button>
      </CardActions>
    </Card>
  );
}

export default memo(PostCard);