import React from 'react';

import errorImage from '../../../assets/images/bharatBillPay.png';
import { IRegularImageProps } from './type';

const RegularImage: React.FC<IRegularImageProps> = ({ sx, loading = 'lazy', fallbackIcon, ...rest }) => {
	const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
		event.currentTarget.src = fallbackIcon ? fallbackIcon : errorImage;
		event.currentTarget.className = 'error';
	};

	return <img alt="icon" loading={loading} onError={imageOnErrorHandler} style={sx} {...rest} />;
};
export default RegularImage;
