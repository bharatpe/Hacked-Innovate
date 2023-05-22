export const modalStyle = {
	card: {
		padding: '0px',
		marginTop: '10px',
		marginBottom: '20px',
	},
	mobileBox: {
		paddingLeft: '15px',
		paddingTop: '5px',
	},
	emailBox: {
		paddingLeft: '15px',
		paddingTop: '10px',
	},
	inputBox: {
		height: '40px',
		border: '0px',
		fontSize: '15px',
		backgroundColor: 'white',
		color: '#1F1F1F',
	},
	editIcon: {
		width: '20px',
		height: '20px',
	},
	line: {
		width: '90%',
		border: ' 1px dashed #999999',
	},
	iconContainer: {
		width: '30px',
		height: '30px',
		padding: '5px 8px',
		borderRadius: '50%',
	},
	msgIcon: {
		width: '15px',
		height: '15px',
	},
	holes: {
		position: 'relative',
		margin: '25px',
		border: '1px dashed #aaa',
		'&:before, &:after': {
			content: '""',
			height: '2px',
			width: '2px',
			backgroundColor: 'white',
			position: 'absolute',
			background: '#eaeaeb',
			borderRadius: '50%',
		},
		' &:before': {
			top: '-50px',
			left: ' -50px',
		},
		' &:after': {
			top: '-50px',
			left: '350px',
		},
	},
	addEmail: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '5px',
		paddingRight: '5px',
		text: {
			textTransform: 'uppercase',
		},
	},
};
