import React from 'react';

import Alert from '@mui/material/Alert';

import ErrorIcon from 'assets/icons/error.svg';
import InfoIcon from 'assets/icons/info.svg';
import SuccessIcon from 'assets/icons/success.svg';
import WarnIcon from 'assets/icons/yellow-info.svg';
import RegularImage from 'components/atoms/RegularImage';

import { alertInfoStyle } from './style';
import { IAlert } from './type';

const AlertMsg: React.FC<IAlert> = ({
  message,
  severity,
  sx,
  icon,
  iconSx,
  noBackground = false,
  iconComponent,
  ...restProps
}): React.ReactElement => {
  let alertSx = { ...alertInfoStyle.alertInfo, ...sx };
  if (noBackground) alertSx = { ...alertSx, ...alertInfoStyle.noBackground };

  let alertIcon;
  switch (severity) {
    case 'error':
      alertIcon = ErrorIcon;
      break;

    case 'success':
      alertIcon = SuccessIcon;
      break;

    case 'warning':
      alertIcon = WarnIcon;
      break;

    case 'info':
    default:
      alertIcon = InfoIcon;
      break;
  }

  return (
    <Alert
      severity={severity}
      sx={alertSx}
      icon={
        iconComponent ? (
          iconComponent
        ) : (
          <RegularImage
            src={icon ? icon : alertIcon}
            alt="error icon"
            sx={iconSx}
            width="13px"
          />
        )
      }
      {...restProps}
    >
      {message}
    </Alert>
  );
};

export default AlertMsg;
