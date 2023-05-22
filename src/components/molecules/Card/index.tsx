import React from 'react';

import Box, { BoxProps } from '@mui/material/Box';

const styles = {
  container: {
    background: '#fff',
    boxShadow: '0px 2px 25px var(--shadow-color)',
    borderRadius: '10px',
    padding: '20px',
  },
};

const Card: React.FC<BoxProps> = (props): React.ReactElement => {
  return (
    <Box {...props} sx={{ ...styles.container, ...props.sx }}>
      {props.children}
    </Box>
  );
};

export default React.memo(Card);
