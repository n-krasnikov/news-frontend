import { type FC } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import './Loader.css';

export const Loader: FC = () => {
  console.log('================================');
  return (
    <CircularProgress 
      size = '250px'
      color = 'info'
      className='loader'
    />
  ); 
};
