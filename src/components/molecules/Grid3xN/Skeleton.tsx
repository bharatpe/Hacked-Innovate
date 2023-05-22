import React from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import ViewAllTitle from '../ViewAllTitle';

interface Props {
	primaryTitle?: string;
	secondaryTitle?: string;
}

const Grid3xNSkeleton: React.FC<Props> = ({ primaryTitle, secondaryTitle }) => {
	return (
		<>
			<ViewAllTitle primaryTitle={primaryTitle as string} secondaryTitle={secondaryTitle as string} />

			<Card sx={{ padding: '0.5rem' }}>
				<Grid container>
					{[1, 2, 3, 4, 5, 6].map((number) => (
						<Grid
							container
							item
							xs={4}
							key={number}
							justifyContent="center"
							alignItems="center"
							flexDirection="column"
							sx={{ padding: '0.8rem 0.5rem' }}>
							<Skeleton animation="wave" height={42} width="100%" />
						</Grid>
					))}
				</Grid>
			</Card>
		</>
	);
};

export default Grid3xNSkeleton;
