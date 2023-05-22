import React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import RegularImage from 'components/atoms/RegularImage';
import { styles } from './styles';

interface IVoucherProps {
	image: string;
	brand: string;
	voucherValue?: number;
	cashback?: number;
	effectivePrice?: number;
	onBuyClick?: () => void;
	viewDetails?:boolean;
}

const Voucher: React.FC<IVoucherProps> = ({ image, brand, voucherValue, cashback, effectivePrice, onBuyClick, viewDetails }) => {
	return (
		<Card sx={{ marginBottom: '1rem' }}>
			<Grid container alignItems="center" justifyContent="space-between" sx={{ padding: '1rem' }}>
				<Grid item xs={4} sx={{ height: '43px' }}>
					<RegularImage
						src={image}
						alt={brand}
						sx={{
							// objectFit: 'contain',
							objectPosition: 'left center',
							width: 'auto',
							height: '100%',
						}}
					/>
				</Grid>
				<Grid item container xs={7} justifyContent="flex-end">
					<div>
						{onBuyClick && (
							<Button onClick={onBuyClick} variant="outlined" sx={styles.buyNow}>
								{viewDetails ? "View Details": "Buy Now"}
							</Button>
						)}
					</div>
				</Grid>
			</Grid>

			<Divider />

			<Grid container sx={{ padding: '1rem' }}>
				<Grid item xs={4}>
					<>
						<Typography component="p" sx={styles.voucherValueTitle}>
							voucher value
						</Typography>
						{
							<Typography component="p" sx={styles.voucherValue}>
								{voucherValue ? `₹${voucherValue}` : '-'}
							</Typography>
						}
					</>
				</Grid>

				<Grid item xs={4} container flexDirection="column" alignItems="center">
					<>
						<Typography component="p" sx={styles.cashbackTitle}>
							cashback
						</Typography>
						{
							<Typography component="p" sx={styles.cashbackValue}>
								{cashback ? `₹${cashback}` : '-'}
							</Typography>
						}
					</>
				</Grid>

				<Grid item xs={4} container flexDirection="column" alignItems="flex-end">
					<>
						<Typography component="p" sx={styles.effectiveTitle}>
							effective price
						</Typography>
						{
							<Typography component="p" sx={styles.effectiveValue}>
								{effectivePrice ? `₹${effectivePrice}` : '-'}
							</Typography>
						}
					</>
				</Grid>
			</Grid>
		</Card>
	);
};

export default Voucher;
