import { type FC } from 'react';
import Typography from '@mui/material/Typography';

import { IErrorPage } from './ErrorPage.props';

import './ErrorPage.css'

export const ErrorPage: FC<IErrorPage> = ({status, message}) => {
  return (
    <>
      <Typography variant='h1' className='error'>{status}</Typography> 
      <Typography variant='h5' className='error-detail'>{message}</Typography>
    </>
  );
}