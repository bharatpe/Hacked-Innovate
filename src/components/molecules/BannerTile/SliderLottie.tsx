import React from 'react';
import Lottie from 'react-lottie';

import useLottie from 'hooks/useLottie';

interface IProps {
	lottieCdnPath: any;
	height?: any;
	width?: any;
}

const SliderLottie: React.FC<IProps> = ({ lottieCdnPath, height, width }) => {
	const lottieConfig = useLottie(lottieCdnPath);
	return <>{lottieConfig?.animationData && <Lottie height={height} width={width} options={lottieConfig} />}</>;
};

export default SliderLottie;
