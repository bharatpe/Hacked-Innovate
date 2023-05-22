import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { IFooterDetailsProps } from '../Footer/type';

const PostPeModeFooter:React.FC<IFooterDetailsProps> = ({}) => {
	const handlePay = () => {};
	return (
		<Grid container spacing={2}>
			<Grid item>
				<Typography>available postpe limit</Typography>
				<Typography>₹20,000</Typography>
			</Grid>
			<Grid item>
				<Button disabled={false} onClick={handlePay}>
					{`pay ₹4,000`}
				</Button>
			</Grid>
		</Grid>
	);
};

export default PostPeModeFooter;
