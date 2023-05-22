import React from 'react';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';

import Cross from 'assets/icons/cross.svg';

import RegularImage from '../RegularImage';
import { modalStyle } from './style';

interface Props {
	onClose: () => void;
	title?: string | React.ReactElement;
	children?: React.ReactNode;
	hideCloseBtn?: boolean;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>; //eslint-disable-line @typescript-eslint/no-explicit-any
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const Modal: React.FC<Props> = ({ onClose, title, children, hideCloseBtn = false }) => {
	return (
		<Dialog open={true} onClose={onClose} TransitionComponent={Transition} fullScreen sx={modalStyle.container}>
			<Box display="flex" justifyContent="space-between" flexWrap="nowrap" mb="10px">
				<Typography sx={modalStyle.titleText}>{title || ''}</Typography>
				{!hideCloseBtn && <RegularImage src={Cross} alt="cross image" onClick={onClose} />}
			</Box>
			<DialogContent sx={modalStyle.content}>{children}</DialogContent>
		</Dialog>
	);
};

export default Modal;
