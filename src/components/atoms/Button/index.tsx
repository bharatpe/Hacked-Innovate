import React from 'react';

import Button from '@mui/material/Button';

import { IButton } from './type';

const ActionButton: React.FC<IButton> = (props): React.ReactElement => {
  const { label, children, ...restProps } = props;
  return <Button {...restProps}>{children}</Button>;
};

export default ActionButton;
