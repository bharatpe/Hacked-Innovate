import { Box, Input, TextField, Typography } from '@mui/material';
import ActionButton from 'components/atoms/Button';
import RegularImage from 'components/atoms/RegularImage';
import Card from 'components/molecules/Card';
import Screen from 'components/organisms/Screen';
import React, { useState } from 'react';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';
import ReferNEarnImg from 'assets/refernearn.png';
const Postpe = () => {
	const [onboard, setOnBoard] = useState<any>(true)
	const onBoard = () => {
		setOnBoard(false)
	};
	return (
		<Screen
			headerDetails={{
				pageName: 'complete onboarding',
			}}
			footerDetails={{
				customButtons: (
					<ActionButton onClick={onBoard} variant="contained">
						{onboard ? 'Done' : "Postpe Now"}
					</ActionButton>
				),
			}}>
				{onboard ?
			<Card>
				<Box sx={cx(globalStyles.mrB20)}>
					<TextField label="Enter Pan Details" variant="filled" focused fullWidth />
				</Box>
				<Box>
					<TextField label="Referral Code" variant="filled" focused fullWidth />
				</Box>
			</Card>:
			<Card>
			<RegularImage src={ReferNEarnImg} sx={cx(globalStyles.w100)}></RegularImage>
			<Typography sx={cx(globalStyles.fontHeavy)}>Welcome to Postpe Merchant Referral Program...</Typography>
			<br />
			<Typography>Enjoy 2X rewards on BBPS, CCBP, QR Payments, and get Personal Loan easily.</Typography>
		</Card>
			}
		</Screen>
	);
};

export default Postpe;
