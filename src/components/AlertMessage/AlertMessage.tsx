import { type FC } from 'react';

import Alert from '@mui/material/Alert';

import { IAlert } from './AlertMessage.props';

import './AlertMessage.css'

export const AlertMessage: FC<IAlert> = ({
  severity,
  message,
}) => {
  return (
    <Alert severity={severity} className='alert'>
      {message}
    </Alert>
  );
}
