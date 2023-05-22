import React from 'react';

import { Typography } from '@mui/material';

import { TypographyStyle } from './style';
import { ITypography } from './type';

const ContentType: React.FC<ITypography> = (props): React.ReactElement => {
  const { children, variant, sx, ...restProps } = props;
  return (
    <Typography
      variant={variant}
      sx={{ ...TypographyStyle, ...sx }}
      {...restProps}
    >
      {children}
    </Typography>
  );
};

export default ContentType;
