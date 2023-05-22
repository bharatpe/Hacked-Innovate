import React from 'react';

import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import ErrorIcon from 'assets/icons/error.svg';
import InfoIcon from 'assets/icons/info.svg';
import { InputStyle } from 'components/atoms/Input/style';
import * as animations from 'styles/animate';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import Button from '../Button';
import RegularImage from '../RegularImage';

export type IErrorType = 'major' | 'minor';
interface IInput extends OutlinedTextFieldProps {
  showMask?: boolean;
  maskValue?: JSX.Element;
  inputLabelLogo?: string;
  labeltext?: string;
  errorMsg?: string;
  errorType?: IErrorType;
  helperChildren?: JSX.Element;
  textFieldLogo?: string;
  setInput?: React.Dispatch<React.SetStateAction<any>>;
  type?: string;
  value?: string;
  onClickLogo?: any;
  setlimit?: number;
}

const Input: React.FC<IInput> = (props): React.ReactElement => {
  const {
    showMask,
    maskValue,
    labeltext,
    inputLabelLogo,
    helperChildren,
    errorMsg,
    errorType,
    textFieldLogo,
    setInput,
    value,
    onClickLogo,
    setlimit,
  } = props;

  const onlyNumberKey = (evt: any) => {
    // Only ASCII character in that range allowed
    const ASCIICode = evt.which ? evt.which : evt.keyCode;
    if (ASCIICode > 47 && ASCIICode < 58) return false;
    return true;
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      setlimit &&
      e.target.value.length <= setlimit &&
      onlyNumberKey(e) &&
      setInput
    ) {
      setInput(e.target.value);
      return;
    }
    if (setInput && !setlimit) setInput(e);
  };
  return (
    <>
      {!!labeltext && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignContent="center"
        >
          <Typography sx={InputStyle.label}>{labeltext}</Typography>

          <Grid>
            {!!inputLabelLogo && (
              <RegularImage
                src={inputLabelLogo}
                alt="logo"
                sx={cx(
                  InputStyle.issuerLogo,
                  animations.animated,
                  animations.fadeInRight
                )}
              />
            )}
          </Grid>
        </Box>
      )}
      <Box position="relative" width="100%">
        <TextField
          FormHelperTextProps={{ sx: { margin: 0, color: 'unset !important' } }}
          value={value}
          helperText={
            <>
              {helperChildren}
              {!!errorMsg && (
                <Box
                  display="flex"
                  alignItems="center"
                  sx={cx(
                    InputStyle.error,
                    animations.upToDownScale,
                    animations.fadeInDown,
                    animations.animated,
                    errorType === 'minor' && errorMsg
                      ? InputStyle.minor
                      : InputStyle.major
                  )}
                >
                  <RegularImage
                    src={errorType === 'minor' ? InfoIcon : ErrorIcon}
                    sx={InputStyle.errorIcon}
                  />
                  <Typography sx={globalStyles.fs14}>{errorMsg}</Typography>
                </Box>
              )}
            </>
          }
          {...props}
          InputProps={{
            endAdornment: textFieldLogo ? (
              <InputAdornment position="end">
                <Button>
                  <RegularImage
                    alt="contact__img"
                    src={textFieldLogo}
                    sx={InputStyle.textFeildIcon}
                    onClick={onClickLogo}
                  />
                </Button>
              </InputAdornment>
            ) : (
              <></>
            ),
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onInputChange(e)
          }
        />
        {showMask && (
          <Typography sx={cx(InputStyle.mask)}>{maskValue}</Typography>
        )}
      </Box>
    </>
  );
};

export default Input;
