import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import RemoveCircleSharpIcon from '@mui/icons-material/RemoveCircleSharp';
import { Box, Button, Typography } from '@mui/material';

import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { modStyle } from './styles';

interface Props {
	quantity: number;
	setQuantity: any;
	setCashbackApplied: any;
}

const Switch: React.FC<Props> = ({ quantity, setQuantity, setCashbackApplied }) => {
	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};
	const decreaseQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	return (
		<Box style={modStyle.flexContainer}>
			<Box>
				<Button onClick={decreaseQuantity} sx={{ paddingLeft: '6.5px' }}>
					{quantity < 2 ? (
						<RemoveCircleSharpIcon sx={{ color: '#AAAAAA' }} />
					) : (
						<RemoveCircleSharpIcon sx={{ color: '#EA4335' }} />
					)}
				</Button>
			</Box>
			<Box>
				<Typography sx={cx(globalStyles.fs15, globalStyles.fontHeavy)}>{quantity}</Typography>
			</Box>
			<Box>
				<Button onClick={increaseQuantity} sx={{ paddingRight: '6.5px' }}>
					<AddCircleSharpIcon />
				</Button>
			</Box>
		</Box>
	);
};

export default Switch;
