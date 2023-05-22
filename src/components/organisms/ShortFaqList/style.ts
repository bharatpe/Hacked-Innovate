import * as animations from 'styles/animate';
import { globalStyles } from 'styles/classes';

export const ShortFaqStyle = {
	card: {
		borderRadius: '10px',
		border: '1px solid #d0d0d0',
		overflow: 'hidden',
		padding: '0px !important',
	},

	viewAll: {
		transform: 'translateY(-2px)',
		fontWeight: '500',
		
	},

	faqItem: {
		borderRadius: '0 !important',
		boxShadow: 'none !important',
	},
	arrowFBtn: {
		fontSize: '1.1rem !important',
	},

	accordionHeader: {
		fontSize: '0.875rem',
		fontWeight: '900',
	},
	faqItemContent: {
		fontSize: '0.875rem',
		lineHeight: '20px',
		opacity: '0.5',
		transition: 'all 0.5s ease',
		fontFamily: '"Poppins", "Roboto", sans-serif',
	},
	faqBox: {
		paddingTop: '30px !important',
	},
	faqTitle: {
		fontSize: '0.875rem',
		fontWeight: '900 !important',
		fontFamily: '"Poppins", "Roboto", sans-serif',
	},
	arrowFontSize: {
		fontSize: '1.2rem !important',
		color: '#aaaaaa',
	},
	animated: {
		animationDuration: '0.5s',
		animationFillMode: 'backwards',
	},
	fadeInRight: animations.fadeInRight,
	clickingAnimation: animations.clickingAnimation,
	globalStyles: {
		pd0: globalStyles.pd0,
		borderBottom: globalStyles.borderBottom,
		noBorder: globalStyles.noBorder,
		mr0: globalStyles.mr0,
		mh200: globalStyles.mh200,
		mrT10: globalStyles.mrT10,
		mh0: globalStyles.mh0,
		fontMedium: globalStyles.font900,
		fs14: globalStyles.fs14,
		rotate90: globalStyles.rotate90,
		transition: globalStyles.transition,
		w8: globalStyles.w8,
		w100: globalStyles.w100,
	},

	arrowRotate: {
		transform: 'rotate(90deg)',
	},
};
