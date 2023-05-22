import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { IScreenProps } from 'components/organisms/Screen/type';
import { useScreenClass } from 'slices';
import * as animations from 'styles/animate';
import { globalStyles } from 'styles/classes';
import { cx, IObjectType } from 'utils/classNames';

import Footer from '../../molecules/Footer';
import Header from '../../molecules/Header';
import { screenStyle } from './styles';

const Screen: React.FC<IScreenProps> = ({ children, headerDetails, footerDetails, overFlowX, sx }) => {
	const screenClass = useScreenClass();
	const [animatedClass, setAnimatedClass] = useState<IObjectType>({});

	useEffect(() => {
		switch (screenClass) {
			case 'fadeOutLeft':
				setAnimatedClass(animations.fadeOutLeft);
				break;
			case 'fadeOutRight':
				setAnimatedClass(animations.fadeOutRight);
				break;
			case 'fadeInLeft':
				setAnimatedClass(animations.fadeInLeft);
				break;
		}
	}, [screenClass]);

	return (
		<Container
			fixed
			sx={cx(
				animations.animated,
				animatedClass,
				screenStyle.pb1,
				overFlowX ? { overflowX: 'hidden' } : {},
				(sx as IObjectType) || {},
			)}>
			<Box sx={cx(screenStyle.boxStyle, animations.animated, animatedClass, globalStyles.pdH10)} />
			{headerDetails && <Header {...headerDetails} />}
			<Box sx={{ paddingTop: '20px' }}>{children}</Box>
			{footerDetails && <Footer {...footerDetails} />}
		</Container>
	);
};

export default Screen;
