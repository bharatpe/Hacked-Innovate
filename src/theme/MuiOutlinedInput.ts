export const MuiOutlinedInputStyleOverride = {
	styleOverrides: {
		root: {
			background: 'var(--gray)',
			borderRadius: '7px',
			// border: '1px solid var(--border-color)',
			fontSize: '0.8125rem',
			lineHeight: '1.5',
			color: 'var(--black)',
			fontFamily: '"Poppins", "Roboto", sans-serif',
			fontWeight: '300',
			'&.Mui-focused': {
				background: 'var(--gray)',
				outline: 'none',
				border: '1px solid var(--theme-primary)',
			},
			'&.Mui-error': {
				border: '1px solid var(--red)',
			},
			'&.Mui-disabled': {
				'& input': {
					'&::placeholder': {
						color: 'green !important',
					},
				},
			},
			'& input': {
				padding: '12px',
				fontSize: '1.125rem',
				fontFamily: '"Poppins", "Roboto", sans-serif',
			},
		},
	},
};
