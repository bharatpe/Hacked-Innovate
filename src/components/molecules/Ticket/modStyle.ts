export const modStyle = {
	card: {
		boxShadow: '0px 2px 25px rgba(0, 0, 0, 0.15)',
		background: '#fff',
		marginTop: '15px',
		borderRadius: '10px',
		minHeight: '90px',
	},
	leftSide: {
		padding: '9px',
		paddingRight: '0px',
	},
	imageWrapper: {
		height: '100%',
		width: '100%',
		borderRadius: '7px',
		border: '1px solid #EEEEEE',
		padding: '7px',
	},
	middle: {
		display: 'flex',
		alignItems: 'center',
		position: 'relative',
		overflowY: 'hidden',
		'&:before,&:after': {
			content: '""',
			position: 'absolute',
			display: 'block',
			width: '20px',
			height: '20px',
			background: '#ececec',
			borderRadius: '50%',
			left: '50%',
			transform: 'translateX(-50%)',
			zIndex: 2,
		},
		'&:before': {
			top: ' -12px',
		},
		'&:after': {
			bottom: '-12px',
			background: '#eaeaeb',
		},
	},
	line: {
		backgroundImage: ' radial-gradient(#EEEEEE 4.5px, transparent 0);',
		backgroundPosition: 'center',
		backgroundSize: ' 15px 15px',
		backgroundRepeat: 'repeat-y',
		height: '75%',
		width: '100%',
	},
};
