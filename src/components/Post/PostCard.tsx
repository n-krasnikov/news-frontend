import { type FC } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IPostCard } from './PostCard.props';

export const PostCard: FC<IPostCard> = ({ 
  id,
  title,
  text,
  tags,
  image,
  author,
  author_id
 }) => {
  return (
    <Card sx={{ width: 425 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/src/assets/react.svg"
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
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}