import React from 'react';

import { cx } from 'utils/classNames';

import ContentType from '../Typography';
import { rupeeAmountStylee } from './style';
import { IRupeeAmount } from './type';

const RupeeAmount: React.FC<IRupeeAmount> = ({
  amount,
  showRupeeIcon = false,
  sx = {},
}) => {
  const formatNumber = (inputNumber: number) => {
    let formattedNumber = Number(inputNumber)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');

    const splitArray = formattedNumber.split('.');
    if (splitArray.length > 1 && Number(splitArray[1]) > 0) {
      return (formattedNumber =
        splitArray[0] + '.' + splitArray[1].slice(0, 2));
    }
    return splitArray[0];
  };

  return (
    <ContentType variant="body1" sx={cx(rupeeAmountStylee.amountText, sx)}>
      {showRupeeIcon && <span>₹</span>}{formatNumber(amount)}
    </ContentType>
  );
};

export default RupeeAmount;
