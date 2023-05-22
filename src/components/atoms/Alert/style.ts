export const alertInfoStyle = {
	alertInfo: {
		fontSize: '0.67rem',
		background: 'var(--light-theme-primary)',
		color: 'var(--theme-primary)',
		border: '1px solid var(--theme-primary)',
		borderRadius: '9px',
		padding: '10px',
		fontFamily: '"Poppins", "Roboto", sans-serif',
		'& .MuiAlert-icon': {
			padding: '0px',
			marginRight: '10px',
			marginTop: '1px',
		},
		'& .MuiAlert-message': {
			display: 'flex',
			alignItems: 'center',
			padding: '0px',
		},
		'&.MuiAlert-standardSuccess': {
			background: 'var(--light-green)',
			color: 'var(--green)',
			border: '1px solid var(--green)',
		},
		'&.MuiAlert-standardInfo': {
			background: 'var(--light-theme-primary)',
			color: 'var(--theme-primary)',
			border: '1px solid var(--theme-primary)',
		},
		'&.MuiAlert-standardWarning': {
			background: 'var(--light-yellow)',
			color: 'var(--yellow)',
			border: '1px solid var(--yellow)',
		},
		'&.MuiAlert-standardError': {
			background: 'var(--light-red)',
			color: 'var(--red)',
			border: '1px solid var(--red)',
		},
	},
	noBackground: {
		background: 'none !important',
		border: 'none !important',
		boxShadow: 'none !important',
	},
};
