import React from 'react';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

export interface IViewAllTitle {
	primaryTitle: string;
	secondaryTitle: string;
	onClick?: () => void;
}

const ViewAllTitle: React.FC<IViewAllTitle> = ({ primaryTitle, secondaryTitle, onClick }) => {
	return (
		<Box display="flex" alignItems="flex-start" justifyContent="space-between" sx={{ margin: '20px 0px 15px 0px' }}>
			<Typography component="p" variant="body1" sx={cx(globalStyles.fs15, globalStyles.fontRegular)}>
				{primaryTitle}{' '}
				<Typography component="span" sx={cx(globalStyles.clrPink, globalStyles.fontHeavy)}>
					{secondaryTitle}
				</Typography>
			</Typography>

			<Box
				display="flex"
				alignItems="center"
				justifyContent="flex-end"
				onClick={onClick}
				sx={{ width: onClick ? '30%' : '10px', marginTop: '2px' }}>
				{onClick ? (
					<>
						<Typography
							component="p"
							sx={cx(globalStyles.uppercase, globalStyles.clrPrimary, globalStyles.fontHeavy, globalStyles.fs11)}>
							view all
						</Typography>
						<ChevronRightIcon sx={cx(globalStyles.clrPrimary, { width: 16, height: 16 })} />
					</>
				) : (
					<Box sx={{ width: '1px' }} />
				)}
			</Box>
		</Box>
	);
};

export default ViewAllTitle;
