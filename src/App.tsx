import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { NativeSupportHandlerV2 } from 'native-support-handler';
import AppRoutes from 'routes';
import { AccountDetail, FeatureAccess, SET_APP_INFO } from 'slices';
import { registerSlice } from 'store';
import { IDispatcherType } from 'types';
import { subScribeBackButton } from 'utils/nativeBackSubscription';
import { getAppInfoNative } from 'utils/nativeHandler';
import getURLParameter from 'utils/getURLParameter';
import GLOBAL_CONSTANT from 'constants/globalConstant';
import { ROUTE_CONSTANT } from 'constants/routesConstants';
import ChangeHistory from 'utils/changeHistory';
import { getAppInfo } from 'utils/App';


const App: React.FC = () => {
	
	const dispatch = useDispatch<IDispatcherType>();

	const openDeepLinks = (routeParam:string) => {
		switch (routeParam) {
			case GLOBAL_CONSTANT.WROUTE.STATUS_SCREEN:
				ChangeHistory({ action: 'push', path: ROUTE_CONSTANT.VOUCHERS.STATUS_SCREEN });
				break;
			
			default:
				break;
		}
	};

	useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			dispatch(SET_APP_INFO({payload:getAppInfo()}))
			
		}else{
			(async () => {
				await NativeSupportHandlerV2.init().then(() => {
					subScribeBackButton();
					getAppInfoNative().then((appData) => {
						dispatch(
							SET_APP_INFO({
								payload: appData,
							}),
						);
					});
				});
			})();
		}


		dispatch(FeatureAccess());
		dispatch(AccountDetail());
		const routeParam = getURLParameter('wroute');
		if(routeParam)
			setTimeout(() => {
				openDeepLinks(routeParam)
			}, 500);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <AppRoutes data-testid="app-component" />;
};

export default App;
