import { SxProps } from '@mui/material';

import { IFooterDetailsProps } from 'components/molecules/Footer/type';
import { IHeaderDetailsProps } from 'components/molecules/Header/type';
import { IAppInfo } from 'types';

export interface IScreenProps {
	headerDetails?: IHeaderDetailsProps;
	generalDetails?: IAppInfo;
	children?: React.ReactNode;
	preventSlide?: boolean;
	footerDetails?: IFooterDetailsProps;
	screenAnimationClass?: string;
	screenClass?: string;
	animationClass?: boolean;
	overFlowX?: boolean;
	sx?: SxProps;
	/** OverflowX is used here when a page is not scrollable.this is done beacause the header is fixed.IF YOU DONT NEED A sticky header pass this prop */
}
