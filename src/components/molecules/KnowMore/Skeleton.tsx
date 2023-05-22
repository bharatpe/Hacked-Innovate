import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import ViewAllTitle from '../ViewAllTitle';

const KnowMoreSkeleton = () => {
	return (
		<>
			<ViewAllTitle primaryTitle="how it" secondaryTitle="works" />

			<Card sx={{ height: '152px' }}>
				<Grid container>
					{[1, 2, 3].map((number) => (
						<Grid
							key={number}
							item
							xs={4}
							container
							flexDirection="column"
							alignItems="center"
							sx={{ padding: '0.7rem' }}>
							<Skeleton variant="circular" animation="wave" height={30} width={30} />
							<Skeleton animation="wave" height={20} width="30%" sx={{ marginTop: '0.5rem' }} />
							<Skeleton animation="wave" height={30} width="90%" />
							<Skeleton animation="wave" height={30} width="70%" />
						</Grid>
					))}
				</Grid>
			</Card>
		</>
	);
};

export default KnowMoreSkeleton;
