import React from 'react';

import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import { modStyle } from './modStyle';

const TicketSkeleton = () => {
	return (
		<Grid container sx={modStyle.card}>
			{/* LEFT TICKET  */}
			<Grid item xs={3} sx={modStyle.leftSide}>
				<Skeleton animation="wave" height="100%" width="100%" />
			</Grid>

			{/* Middle TICKET  */}
			<Grid item xs={0.5} sx={modStyle.middle}>
				<Grid item sx={modStyle.line}></Grid>
			</Grid>

			{/* Right TICKET  */}
			<Grid item xs={8.5} sx={{ padding: '0rem 1.2rem 0rem 1rem' }}>
				<Skeleton animation="wave" height={90} width="100%" />
			</Grid>
		</Grid>
	);
};

export default TicketSkeleton;
