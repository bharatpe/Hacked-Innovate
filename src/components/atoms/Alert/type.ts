import React from 'react';

import { AlertProps } from '@mui/material/Alert';

export interface IAlert extends AlertProps {
  message: string | React.ReactNode | undefined;
  noBackground?: boolean;
  icon?: string;
  iconSx?: React.CSSProperties;
  iconComponent?: React.ReactNode;
}
