import React from 'react';

import { Grid } from '@mui/material';

import Card from '../Card';
import * as animations from 'styles/animate';
import { globalStyles } from 'styles/classes';
import { cx } from 'utils/classNames';

import { KEY_VALUES } from './CONSTANTS';
import { keyboardStyles } from './style';
import { IKeyboardProps, KeyValueType } from './type';

const Keyboard: React.FC<IKeyboardProps> = ({ keyboardTapCallback, longPressCallback, keyboardDisabled }) => {
	let buttonLongPressTimer: NodeJS.Timeout | undefined;

	const handleButtonPress = (passCallback: boolean) => () => {
		buttonLongPressTimer = setTimeout(() => {
			if (passCallback) longPressCallback();
		}, 500);
	};

	const handleButtonPressRelease = () => clearTimeout(buttonLongPressTimer);

	const onKeyClick = (key: KeyValueType) => () => {
		if (typeof key === 'string' || typeof key === 'number') return keyboardTapCallback(key);

		keyboardTapCallback('backspace');
	};

	return (
		<Grid container sx={keyboardStyles.container}>
			{KEY_VALUES.map((keyValue, index: number) => (
				<Grid item key={`keyboard-${index}`} xs={4} sx={keyboardStyles.keyContainer}>
					<div
						onClick={onKeyClick(keyValue)}
						onMouseDown={handleButtonPress(typeof keyValue === 'object')}
						onTouchStart={handleButtonPress(typeof keyValue === 'object')}
						onMouseUp={handleButtonPressRelease}
						onTouchEnd={handleButtonPressRelease}
						onMouseLeave={handleButtonPressRelease}
						style={cx(
							keyboardStyles.clickContainer,
							animations.clickingAnimation,
							keyboardDisabled ? globalStyles.disabled : {},
						)}>
						{typeof keyValue === 'number' ? (
							<Card sx={cx(keyboardStyles.key, animations.clickingAnimation)}>{keyValue}</Card>
						) : (
							<Card sx={cx(keyboardStyles.key, keyboardStyles.noEleveation, animations.clickingAnimation)}>
								{keyValue}
							</Card>
						)}
					</div>
				</Grid>
			))}
		</Grid>
	);
};

export default Keyboard;
