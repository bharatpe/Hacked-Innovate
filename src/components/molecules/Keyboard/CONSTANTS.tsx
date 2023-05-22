import React from 'react';

import KeyboardBackIcon from 'assets/icons/keyboard-back.svg';
import RegularImage from 'components/atoms/RegularImage';

import { keyboardStyles } from './style';
import { KeyValueType } from './type';

export const KEY_VALUES: KeyValueType[] = [
  1,
  2,
  3,

  4,
  5,
  6,

  7,
  8,
  9,
  '.',
  0,
  <RegularImage
    key="backspace-key"
    src={KeyboardBackIcon}
    alt="backspace"
    sx={keyboardStyles.backspace}
  />,
];
