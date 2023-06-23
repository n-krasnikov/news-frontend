import { type FC } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import './Loader.css'

export const Loader: FC = () => {
  return <CircularProgress className='loader'/>;
}
