export const MuiChipStyleOverride = {
	styleOverrides: {
		root: {
			color: 'rgb(79, 79, 79)',
			padding: '7px',
			borderRadius: '9px',
			fontSize: '0.75rem !important',
			fontFamily: '"Poppins", "Roboto", sans-serif',
			fontWeight: 700,
			'&.MuiChip-colorSecondary': {
				color: 'var(--pink)',
				backgroundColor: 'var(--light-pink)',
			},
			'&.MuiChip-colorPrimary': {
				color: 'var(--theme-primary)',
				borderColor: 'var(--theme-primary)',
				fontSize: '0.625rem !important',
				height: '25px',
				padding: '0px',
				marginLeft: '5px',
				'& .MuiChip-label': {
					textTransform: 'uppercase',
					padding: '0px 10px',
				},
			},
		},
	},
};
