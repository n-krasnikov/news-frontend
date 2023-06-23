import { type FC, memo } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IPostCard } from './PostCard.props';

const PostCard: FC<IPostCard> = ({ 
  title,
  text,
  image,
  author,
 }) => {
  return (
    <Card sx={{ width: 425 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
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
        <Button size="small">{author}</Button>
      </CardActions>
    </Card>
  );
}

export default memo(PostCard);