/* eslint-disable max-len */

import { Components, Theme } from '@mui/material';

import {
    poppinsBold, poppinsExtraBold, poppinsExtraLight, poppinsLight, poppinsMedium, poppinsRegular
} from 'constants/fontConstant';

export const MuiCssBaselineStylesOveride: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
	styleOverrides: `
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 200;
			src: url(${poppinsExtraLight}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 300;
			src: url(${poppinsLight}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 400;
			src: url(${poppinsRegular}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 500;
			src: url(${poppinsMedium}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 700;
			src: url(${poppinsBold}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
		@font-face {
			font-family: 'Poppins';
			font-style: normal;
			font-display: swap;
			font-weight: 800;
			src: url(${poppinsExtraBold}) format('woff');
			unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
		}
	`,
};
