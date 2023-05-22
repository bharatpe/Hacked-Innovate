import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { modStyle } from './styles';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}
interface Props {
	title: string;
	instructionList: any;
}
const InstructioBox: React.FC<Props> = ({ title, instructionList }) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const ExpandMore = styled((props: ExpandMoreProps) => {
		const { expand, ...other } = props;
		return <IconButton {...other} />;
	})(({ theme, expand }) => ({
		transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
		marginLeft: '55px',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	}));

	return (
		<Card sx={cx(globalStyles.w100, globalStyles.mrT20, modStyle.InstructioBox)}>
			<Box display="flex" alignItems="center" justifyContent="space-between" onClick={handleExpandClick}>
				<Typography sx={cx(globalStyles.fs13, globalStyles.fontHeavy)}>{title}</Typography>

				<ExpandMore
					expand={expanded}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					sx={{ width: '20px', height: '20px' }}>
					<ExpandMoreIcon />
				</ExpandMore>
			</Box>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent sx={cx(globalStyles.pd0, globalStyles.mrT15)}>
					<Typography
						sx={cx(globalStyles.fs11)}
						dangerouslySetInnerHTML={{
							__html: instructionList,
						}}></Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
};

export default InstructioBox;
