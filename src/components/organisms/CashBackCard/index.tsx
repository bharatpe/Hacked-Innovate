import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import OfferIcon from 'assets/icons/offerOrange.svg';
import RegularImage from 'components/atoms/RegularImage';
import Card from 'components/molecules/Card';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { modStyle } from './styles';

interface Props {
	setCashbackApplied: any;
	couponPrice?: number;
	cashbackApplied: boolean;
}
const CashBackCard: React.FC<Props> = ({ setCashbackApplied, couponPrice, cashbackApplied }) => {
	const applyCashBack = () => {
		setCashbackApplied(!cashbackApplied);
	};

	useEffect(() => {
		console.log(cashbackApplied);
	}, []);

	return (
		<Card sx={cx(modStyle.card)}>
			<Box display="flex" alignItems="center" justifyContent="space-between">
				<Box display="flex" alignItems="center">
					<RegularImage src={OfferIcon} />
					<Typography sx={cx(globalStyles.fs13, globalStyles.fontHeavy, globalStyles.mrL10)}>
						cashback ₹{couponPrice}
					</Typography>
				</Box>

				<Typography sx={cx(globalStyles.capitalize, modStyle.text, globalStyles.fontHeavy)} onClick={applyCashBack}>
					{!cashbackApplied ? 'Apply' : 'Remove'}
				</Typography>
			</Box>
		</Card>
	);
};

export default CashBackCard;
