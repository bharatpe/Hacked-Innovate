import { keyframes } from '@emotion/react';

const fadeInKeyframe = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const fadeIn = { animationName: `${fadeInKeyframe}` };

const fadeInDownKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInDown = { animationName: `${fadeInDownKeyframe}` };

const fadeInDownBigKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, -2000px, 0);
		transform: translate3d(0, -2000px, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInDownBig = { animationName: `${fadeInDownBigKeyframe}` };

const fadeInLeftKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInLeft = { animationName: `${fadeInLeftKeyframe}` };

const fadeInLeftBigKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInLeftBig = { animationName: `${fadeInLeftBigKeyframe}` };

const fadeInRightKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInRight = { animationName: `${fadeInRightKeyframe}` };

const fadeInRightBigKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(2000px, 0, 0);
		transform: translate3d(2000px, 0, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInRightBig = { animationName: `${fadeInRightBigKeyframe}` };

const fadeInUpKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInUp = { animationName: `${fadeInUpKeyframe}` };

const fadeInUpBigKeyframe = keyframes`
	from {
		opacity: 0;
		-webkit-transform: translate3d(0, 2000px, 0);
		transform: translate3d(0, 2000px, 0);
	}

	to {
		opacity: 1;
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
`;

export const fadeInUpBig = { animationName: `${fadeInUpBigKeyframe}` };

const fadeOutKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
`;

export const fadeOut = { animationName: `${fadeOutKeyframe}` };

const fadeOutDownKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(0, 100%, 0);
		transform: translate3d(0, 100%, 0);
	}
`;

export const fadeOutDown = { animationName: `${fadeOutDownKeyframe}` };

const fadeOutDownBigKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(0, 2000px, 0);
		transform: translate3d(0, 2000px, 0);
	}
`;

export const fadeOutDownBig = { animationName: `${fadeOutDownBigKeyframe}` };

const fadeOutLeftKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}
`;

export const fadeOutLeft = { animationName: `${fadeOutLeftKeyframe}` };

const fadeOutLeftBigKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(-2000px, 0, 0);
		transform: translate3d(-2000px, 0, 0);
	}
`;

export const fadeOutLeftBig = { animationName: `${fadeOutLeftBigKeyframe}` };

const fadeOutRightKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
	}
`;

export const fadeOutRight = { animationName: `${fadeOutRightKeyframe}` };

const fadeOutRightBigKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(2000px, 0, 0);
		transform: translate3d(2000px, 0, 0);
	}
`;

export const fadeOutRightBig = { animationName: `${fadeOutRightBigKeyframe}` };

const fadeOutUpKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
`;

export const fadeOutUp = { animationName: `${fadeOutUpKeyframe}` };

const fadeOutUpBigKeyframe = keyframes`
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
		-webkit-transform: translate3d(0, -2000px, 0);
		transform: translate3d(0, -2000px, 0);
	}
`;

export const fadeOutUpBig = { animationName: `${fadeOutUpBigKeyframe}` };

const upToDownScaleKeyframe = keyframes`
	from {
		opacity: 0;
		transform: scaleY(0.5);
	}
	to {
		opacity: 1;
		transform: scaleY(1);
	}
`;

export const upToDownScale = { animationName: `${upToDownScaleKeyframe}` };

const downToUpScaleKeyframe = keyframes`
	@keyframes DownToUpScaleAnim {
	from {
		opacity: 0;
		transform: scaleY(0.5);
	}
	to {
		opacity: 1;
		transform: scaleY(1);
	}
}
`;

export const downToUpScale = { animationName: `${downToUpScaleKeyframe}` };

export const blinkKeyframe = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const blinkAnimation = {
  animation: `0.5s infinite alternate-reverse ${blinkKeyframe}`,
};

export const animated = {
  animationDuration: '0.5s',
  animationFillMode: 'backwards',
};

export const delay01 = {
  animationDelay: '0.1s',
};
export const delay02 = {
  animationDelay: '0.2s',
};
export const delay03 = {
  animationDelay: '0.3s',
};
export const delay04 = {
  animationDelay: '0.4s',
};
export const delay05 = {
  animationDelay: '0.5s',
};
export const delay06 = {
  animationDelay: '0.6s',
};
export const delay07 = {
  animationDelay: '0.7s',
};
export const delay08 = {
  animationDelay: '0.8s',
};
export const delay09 = {
  animationDelay: '0.9s',
};
export const delay1 = {
  animationDelay: '1s',
};
export const delay2 = {
  animationDelay: '2s',
};
export const delay3 = {
  animationDelay: '3s',
};
export const delay4 = {
  animationDelay: '4s',
};
export const delay5 = {
  animationDelay: '5s',
};
export const delay6 = {
  animationDelay: '6s',
};
export const delay7 = {
  animationDelay: '7s',
};
export const delay8 = {
  animationDelay: '8s',
};
export const delay9 = {
  animationDelay: '9s',
};
export const animatedFaster = {
  animationDuration: '500ms',
};
export const animatedFast = {
  animationDuration: '800ms',
};
export const animatedSlow = {
  animationDuration: '2s',
};
export const animatedSlower = {
  animationDuration: '3s',
};
export const clickingAnimation = {
  cursor: 'pointer',
  transition: 'all 0.5s ease',
  '&:active': {
    transform: 'scale(0.8)',
  },
};
