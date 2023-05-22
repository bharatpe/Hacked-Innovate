import React from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

const VoucherSkeleton = () => {
	return (
		<Card sx={{ marginBottom: '1rem' }}>
			<Grid container alignItems="center" justifyContent="space-between" sx={{ padding: '1rem' }}>
				<Grid item xs={3}>
					<Skeleton animation="wave" height="50px" width="100%" />
				</Grid>
				<Grid item container xs={7} justifyContent="flex-end">
					<Skeleton animation="wave" height="50px" width="100%" />
				</Grid>
			</Grid>

			<Divider />

			<Grid container sx={{ padding: '1rem' }} spacing="1rem">
				<Grid item xs={4}>
					<Skeleton animation="wave" width="100%" />
					<Skeleton animation="wave" width="100%" />
				</Grid>

				<Grid item xs={4} container flexDirection="column" alignItems="center">
					<Skeleton animation="wave" width="100%" />
					<Skeleton animation="wave" width="100%" />
				</Grid>

				<Grid item xs={4} container flexDirection="column" alignItems="flex-end">
					<Skeleton animation="wave" width="100%" />
					<Skeleton animation="wave" width="100%" />
				</Grid>
			</Grid>
		</Card>
	);
};

export default VoucherSkeleton;
