import Card from 'components/molecules/Card';
import Screen from 'components/organisms/Screen';
import React from 'react';
import ReferNEarnImg from 'assets/refernearn.png';
import QR from 'assets/frame.png';
import RegularImage from 'components/atoms/RegularImage';
import { cx } from 'utils/classNames';
import { globalStyles } from 'styles/classes';
import { Box, Grid, ListItem, ListItemButton, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import { modStyle } from './styles';
import VerticalLinearStepper from 'containers/VirtualStepper';
import CustomizedTimeline from 'containers/RewardsTimeLine';
import PageSizeCustomOptions from 'containers/Earning';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Dashboard from 'containers/Dashboard';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const Home = () => {
	const handleBack = () => {};
	const cashbackDetails: any = {};
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};
	
	return (
		<Screen
			headerDetails={{
				pageName: 'Referral Program',
			}}>
			<Card>
				<RegularImage src={ReferNEarnImg} sx={cx(globalStyles.w100)}></RegularImage>
				<Typography sx={cx(globalStyles.fontHeavy)}>Enter Merchant Loyalty Program and Advocate Postpe...</Typography>
				<br />
				<Typography>Hai Yahkeen BharatPe to kar Postpe - ### De Dena Aaram Se.</Typography>
			</Card>

			<Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '20px' }}>
				<Tabs value={value} onChange={handleChange} variant="scrollable" centered>
					<Tab label="How To participate" />
					<Tab label="Refer Now" />
					<Tab label="Earning" />
					<Tab label="Dashboard" />
				</Tabs>
			</Box>
			{value === 0 && (
				<>
					<Box style={cx(globalStyles.mrT20)}>
						<VerticalLinearStepper setValue={setValue} />
					</Box>
				</>
			)}
			{value === 1 && (
				<>
					<RegularImage src={QR} sx={cx(modStyle.qr)}></RegularImage>
					<Box style={cx(modStyle.or)}>OR</Box>
					<Card style={cx(modStyle.refer)}>
						{' '}
						<span style={cx(globalStyles.font900, globalStyles.mr10)}>Share Referral Code : </span> MERCHCVY
					</Card>
				</>
			)}
			{value === 2 && (
				<>
					
					<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={cx(globalStyles.mr10)}>
						<Grid item xs={6}>
							{/* <Item> */}
								<Card>
									<Box sx={cx(globalStyles.pdL10)}>
										<Typography sx={cx(globalStyles.font900, globalStyles.mrL30, globalStyles.pd10)}>200</Typography>
									</Box>
									<Box sx={cx(globalStyles.mrL10, globalStyles.mrT5)}>
										<Typography sx={cx(globalStyles.capitalize)}>Total Earning</Typography>
									</Box>
								</Card>
							{/* </Item> */}
						</Grid>
						<Grid item xs={6}>
							{/* <Item> */}
							<Card>
									<Box sx={cx(globalStyles.pdL10)}>
										<Typography sx={cx(globalStyles.font900, globalStyles.mrL30, globalStyles.pdL20)}>4</Typography>
									</Box>
									<Box sx={cx(globalStyles.mrL10, globalStyles.mrT5)}>
										<Typography sx={cx(globalStyles.capitalize)}>Total Referrals</Typography>
									</Box>
								</Card>
							{/* </Item> */}
						</Grid>
						<Grid item xs={6}>
							{/* <Item> */}
							<Card>
									<Box sx={cx(globalStyles.pdL10)}>
										<Typography sx={cx(globalStyles.font900, globalStyles.mrL30, globalStyles.pdL20)}>2</Typography>
									</Box>
									<Box sx={cx( globalStyles.mrT5, globalStyles.alignCenter, globalStyles.mrL20)}>
										<Typography sx={cx(globalStyles.capitalize)}>Successfull</Typography>
									</Box>
								</Card>
							{/* </Item> */}
						</Grid>
						<Grid item xs={6}>
							{/* <Item> */}
							<Card>
									<Box sx={cx(globalStyles.pdL10)}>
										<Typography sx={cx(globalStyles.font900, globalStyles.mrL30, globalStyles.pd20)}>1</Typography>
									</Box>
									<Box sx={cx(globalStyles.mrL20, globalStyles.mrT5)}>
										<Typography sx={cx(globalStyles.capitalize)}>Your Rank</Typography>
									</Box>
								</Card>
							{/* </Item> */}
						</Grid>
					</Grid>
					<Box sx={cx(globalStyles.h100)}>
						<CustomizedTimeline />
					</Box>

					<PageSizeCustomOptions />
				</>
			)}
			{value===3 && <Dashboard/>}
			{/* <Typography sx={cx(globalStyles.fontHeavy)}>
				Milestone
			</Typography> */}

			{/* <Card>
				<Typography>benefits for successful referral</Typography>
				<Typography>upgrade your cashback tier by 1% with each successful referral</Typography>
				<Typography>max 5% cashback on your spends with 5 successful referrals</Typography>
				<Typography>max cashback per transaction 100 and max cashback per month 1000</Typography>
				<Typography>cashback can be used to repay your monthly postpe bill</Typography>
				<Typography>cashback tier resets to 0 on 1st of every month.</Typography>
			</Card> */}
		</Screen>
	);
};

export default Home;
