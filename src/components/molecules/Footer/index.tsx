import React from 'react';

import { Box, Button, Grid } from '@mui/material';

import { FooterStyle } from 'components/molecules/Footer/style';
import { IFooterDetailsProps } from 'components/molecules/Footer/type';
import * as animations from 'styles/animate';
import { cx } from 'utils/classNames';

const Footer: React.FC<IFooterDetailsProps> = ({
  buttonText,
  buttonHandler,
  buttonDisable,
  buttonVariant = 'contained',
  firstButtonText,
  firstButtonHandler,
  firstButtonDisable,
  firstButtonVariant,
  secondButtonText,
  secondButtonHandler,
  secondButtonDisable,
  secondButtonVariant,
  customButtons,
}) => {
  const renderButtons = () => {
    if (buttonText) {
      return (
        <Button
          variant={buttonVariant}
          disabled={buttonDisable}
          onClick={buttonHandler}
        >
          {buttonText}
        </Button>
      );
    }

    if (firstButtonText && secondButtonText) {
      return (
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button
              variant={firstButtonVariant}
              disabled={firstButtonDisable}
              onClick={firstButtonHandler}
            >
              {firstButtonText}
            </Button>
          </Grid>

          <Grid item xs={6}>
            <Button
              variant={secondButtonVariant}
              disabled={secondButtonDisable}
              onClick={secondButtonHandler}
            >
              {secondButtonText}
            </Button>
          </Grid>
        </Grid>
      );
    }
  };

  return (
    <Box
      sx={cx(
        FooterStyle.card,
        animations.animated,
        animations.fadeInUp,
        animations.delay03
      )}
    >
      {customButtons ? customButtons : renderButtons()}
    </Box>
  );
};

export default Footer;
