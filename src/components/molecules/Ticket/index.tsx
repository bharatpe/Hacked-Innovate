import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ribbon from 'assets/images/ribbon.svg';

import RegularImage from '../../atoms/RegularImage';
import { modStyle } from './modStyle';

interface ITicketProps {
	img?: string;
	leftComponent?: React.ReactNode;
	rightComponent?: React.ReactNode;
}

const Ticket: React.FC<ITicketProps> = ({ img, leftComponent, rightComponent }) => {
	return (
		<Grid container sx={modStyle.card}>
			{/* LEFT TICKET  */}
			<Grid item xs={3} sx={modStyle.leftSide}>
				<Box sx={modStyle.imageWrapper}>
					<RegularImage
						src={img || ribbon}
						alt="brand image"
						sx={{
							objectFit: 'contain',
							objectPosition: 'center',
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
			</Grid>

			{/* Middle TICKET  */}
			<Grid item xs={1} sx={modStyle.middle}>
				<Grid item sx={modStyle.line} />
			</Grid>

			{/* Right TICKET  */}
			<Grid item xs={8}>
				{rightComponent}
			</Grid>
		</Grid>
	);
};
export default Ticket;
