import React from 'react';

import { SxProps } from '@mui/material';

export interface IHeaderDetailsProps {
	pageName: string;
	headerClass?: string;
	generalDetails?: unknown;
	logo?: string;
	isLogo?: boolean;
	backActionToCloseDeeplink?: boolean;
	backHandler?: () => void;
	sx?: SxProps;
	customComponent?: React.ReactNode;
}
