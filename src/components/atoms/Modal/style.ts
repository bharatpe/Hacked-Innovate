export const modalStyle = {
	container: {
		'& .MuiDialog-paperFullScreen': {
			height: 'fit-content',
			width: 'calc(100% - 20px)',
			position: 'absolute',
			borderTopLeftRadius: '10px',
			borderTopRightRadius: '10px',
		},
		'& .MuiDialogContent-root': {
			padding: '8px 16px',
		},
	},
	titleText: {
		width: '80%',
		fontSize: '1.125rem',
		fontFamily: '"Poppins", "Roboto", sans-serif',
		fontWeight: '500',
	},
	content: {
		padding: '0 !important',
	},
};
