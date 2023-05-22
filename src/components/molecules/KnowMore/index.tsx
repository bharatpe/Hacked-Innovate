import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import RegularImage from 'components/atoms/RegularImage';
import Grid3xN from 'components/molecules/Grid3xN';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import ViewAllTitle from '../ViewAllTitle';

interface IDetails {
	image: string;
	brand: string;
	title: string;
	step: React.ReactNode;
}

const details: Array<IDetails> = [
	{
		image: 'https://d30gqtvesfc1d5.cloudfront.net/postpe/gift-vouchers/blue-note.svg',
		brand: 'postpe',
		title: 'purchase gift voucher using postpe',
		step: <Typography sx={cx(globalStyles.clrPrimary, globalStyles.fs11, globalStyles.mrB5)}>step 1</Typography>,
	},
	{
		image: 'https://d30gqtvesfc1d5.cloudfront.net/postpe/gift-vouchers/purple-cart.svg',
		brand: 'postpe',
		title: 'visit brand store, website or app',
		step: <Typography sx={cx(globalStyles.clrPurple, globalStyles.fs11, globalStyles.mrB5)}>step 2</Typography>,
	},
	{
		image: 'https://d30gqtvesfc1d5.cloudfront.net/postpe/gift-vouchers/pink-voucher.svg',
		brand: 'postpe',
		title: 'redeem your voucher on your purchase',
		step: <Typography sx={cx(globalStyles.clrPink, globalStyles.fs11, globalStyles.mrB5)}>step 3</Typography>,
	},
];

const KnowMore = () => {
	const handleCustomComponent = (item: IDetails) => {
		return (
			<Box
				display="flex"
				alignItems="center"
				justifyContent="flex-start"
				flexDirection="column"
				sx={{ height: '100%', padding: 0 }}>
				<RegularImage
					src={item.image}
					alt={item.brand}
					sx={{ width: '38%', maxWidth: '100%', minHeight: '25.5px', height: 'auto', marginBottom: '0.5rem' }}
				/>
				{item.step}
				<Typography
					component="p"
					sx={cx(globalStyles.fs11, globalStyles.fontRegular, globalStyles.textCenter, globalStyles.w90)}>
					{item.title}
				</Typography>
			</Box>
		);
	};

	return (
		<>
			<ViewAllTitle primaryTitle="how it" secondaryTitle="works" />

			<Grid3xN
				gridItems={details}
				onClick={() => {}}
				customComponent={handleCustomComponent}
				sx={{ marginBottom: '1rem', padding: '0.7rem' }}
				gridItemSx={{ padding: 0 }}
				gridProps={{ spacing: 1 }}
			/>
		</>
	);
};

export default KnowMore;
