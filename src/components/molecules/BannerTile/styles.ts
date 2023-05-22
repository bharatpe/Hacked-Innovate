export const styles = {
	bannerContainer: {
		borderRadius: '15px !important',
	},
	purpleBanner: {
		background: 'linear-gradient(270deg, #6B4795 -1.61%, #B377C7 105%)',
	},
	blueBanner: {
		background: 'linear-gradient(92.83deg, #B8E6FA -1.61%, #009CDE 101.51%)',
	},
	pinkBanner: {
		background: 'linear-gradient(270deg, #E73178 -1.61%, #F89FBF 101.67%)',
	},

	bannerButton: {
		backgrounColor: '#FFFFFF',
		color: '#009CDE',
		fontSize: '0.6875rem',
		display: 'flex',
		fontWeight: '700',
		padding: '6px 14px !important',
		minWidth: '0px !important',
	},
	bannerTile: {
		position: 'relative',
		overflow: 'visible',
		margin: 'auto',
		padding: '12px',
		height: '100%',
		width: 'auto',
		borderRadius: '15px !important',
		marginRight: '1rem',
	},
	logoContainer: {
		height: 'auto',
		minHeight: '132px',
		alignItems: 'center',
		justifyItems: 'center',
	},
	backgroundC: {
		background: 'white !Important',
	},

	aliceCarouselDot: {
		'.alice-carousel__dots': {
			marginTop: '5px',
		},
		'.alice-carousel__wrapper': {
			boxShadow: '0px 2px 25px var(--shadow-color)',
			borderRadius: '15px !important',
		},
		'.alice-carousel__dots-item:not(.__custom):hover, .alice-carousel__dots-item:not(.__custom).__active': {
			'&.__active': {
				backgroundColor: '#009CDE',
			},
			'&.alice-carousel__dots-item:not(.__custom):hover': {
				backgroundColor: '#D0D0D0 !important',
			},
		},
		'.alice-carousel__dots-item:not(.__custom):not(:last-child)': {
			marginRight: '4px',
			width: '8px',
			height: '8px',
		},
	},
};
