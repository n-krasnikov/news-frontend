import { type FC } from 'react';

import Alert from '@mui/material/Alert';

import { IAlerts } from './AlertMessage.props';

import './AlertMessage.css'

export const AlertMessage: FC<IAlerts> = ({
  severity,
  message,
  }) => {
  return (
    <Alert severity={severity} className="alert">
      {message}
    </Alert>
  );
}
