import React, { useEffect } from 'react';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import ContentType from 'components/atoms/Typography';
import { headerStyle } from 'components/molecules/Header/style';
import { IHeaderDetailsProps } from 'components/molecules/Header/type';
import * as animations from 'styles/animate';
import ChangeHistory from 'utils/changeHistory';
import { cx, IObjectType } from 'utils/classNames';
import { closeWebView, preventBackButton, setNativeRoute } from 'utils/nativeBackSubscription';

const Header: React.FC<IHeaderDetailsProps> = ({ ...headerDetails }) => {
	const goBack = () => {
		if (headerDetails.backActionToCloseDeeplink) {
			closeWebView();
		} else {
			if (headerDetails.backHandler) {
				headerDetails.backHandler();
			} else {
				//if path not passed in history then default go back
				ChangeHistory({ action: 'back' });
			}
		}
	};

	
	useEffect(() => {
		if (headerDetails.backHandler) {
			preventBackButton(() => {
				if (headerDetails.backHandler) {
					headerDetails.backHandler();
				}
			});
		} else if (headerDetails.backActionToCloseDeeplink) {
			setNativeRoute(true);
		} else {
			setNativeRoute(false);
			preventBackButton(() => {
				goBack();
			});
		}
	}, [headerDetails.backHandler, headerDetails.backActionToCloseDeeplink, headerDetails.logo]);

	return (
		<>
			<Toolbar
				sx={cx(
					headerStyle.toolbarStyle,
		
					(headerDetails?.sx || {}) as IObjectType,
				)}>
				<Box display="flex" alignItems="center" justifyContent="flex-start">
					<IconButton
						size="small"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={headerStyle.backButton}
						onClick={goBack}>
						<ArrowBackIosRoundedIcon />
					</IconButton>
					<ContentType variant="h6" component="div" sx={headerStyle.pageName}>
						{headerDetails.pageName}
					</ContentType>
				</Box>
				{headerDetails?.customComponent || ''}
			</Toolbar>
		</>
	);
};

export default Header;
