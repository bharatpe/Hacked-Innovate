import { Get } from 'Api/requests/AccountDetailRequest';
import { Get as GetV2 } from 'Api/requests/postpeRequest';
import axios from 'axios';
import { closeWebView } from 'utils/nativeBackSubscription';

import { IAccountDetails, IFeatureAccess } from '../../types';
import API from '../constants';

export const FeatureAccessAPI = async (): Promise<IFeatureAccess> => GetV2<IFeatureAccess>(API.GENERAL.ACCESS_FEATURE);

export const AccountAPI = async () => {
	let accountDetails = {};
	await Get<IAccountDetails>(API.GENERAL.ACCOUNT)
	  .then(api => {
		if (api.accountStatus && api.accountStatus !== 'ACTIVE') {
		  closeWebView();
		  return;
		}
		accountDetails = api;
	  })
	  .catch(() => {
		closeWebView();
		return;
	  });
	return accountDetails;
  };