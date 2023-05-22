import { createTheme } from '@mui/material/styles';

import { MuiBackDropStyleOverride } from 'theme/MuiBackdrop';
import { MuiChipStyleOverride } from 'theme/MuiChip';
import { MuiCssBaselineStylesOveride } from 'theme/MuiCssBaseline';
import { MuiOutlinedInputStyleOverride } from 'theme/MuiOutlinedInput';
import { MuiTypographyStylesOverride } from 'theme/MuiTypography';

const theme = createTheme({
	palette: {
		primary: {
			main: '#009cde',
		},
	},
	typography: {
		fontFamily: ['Poppins', 'Roboto', 'sans-serif'].join(','),
		fontWeightLight: 200,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		button: {
			textTransform: 'capitalize',
			borderRadius: '6px',
			'&.MuiButton-containedPrimxary': {
				color: 'white',
			},
		},
	},
	components: {
		MuiCssBaseline: MuiCssBaselineStylesOveride,
		MuiTypography: MuiTypographyStylesOverride,
		MuiOutlinedInput: MuiOutlinedInputStyleOverride,
		MuiChip: MuiChipStyleOverride,
		MuiModal: MuiBackDropStyleOverride,
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 2px 25px rgba(0, 0, 0, 0.15)',
					background: '#ffffff',
					borderRadius: '10px',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => ({
					...(ownerState.variant === 'outlined' && {
						border: '1px solid var(--theme-primary)',
						color: 'var(--theme-primary)',
						background: 'transparent',
						minWidth: '100%',
						textTransform: 'lowercase',
						borderRadius: '9px',
						fontWeight: 'bold',
						padding: '10px 18px',
						outline: 'none',
					}),
					...(ownerState.variant === 'text' && {
						padding: 0,
						color: '#009cde',
						textTransform: 'uppercase',
						fontFamily: '"Poppins", "Roboto", sans-serif',
						fontWeight: 700,
						fontSize: '0.875rem',
					}),
					...(ownerState.variant === 'contained' && {
						border: '1px solid var(--theme-primary)',
						background: 'var(--theme-primary)',
						color: '#ffffff',
						fontSize: '0.875rem',
						fontFamily: '"Poppins", "Roboto", sans-serif',
						fontWeight: 800,
						padding: '12px 18px',
						textTransform: 'uppercase',
						outline: 'none',
						width: '100%',
						borderRadius: '9px',
						cursor: 'pointer',
						transition: 'all 0.5s ease',
					}),
					...(ownerState.disabled && {
						opacity: 0.5,
						pointerEvents: 'none',
						backgroundColor: 'var(--theme-primary) !important',
						color: '#ffffff !important',
					}),
				}),
			},
		},
	},
});

export default theme;
