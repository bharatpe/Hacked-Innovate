import globalConstant from 'constants/globalConstant';
import { IAppInfo, IConsumerInfo } from 'types';
import isIOS from './iOSDetector';

const getURLParameter = (paramName: string, URLString = window.location.href): string => {
	const regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
	const results = regex.exec(URLString);

	if (results && results.length > 0) {
		return decodeURIComponent(results[1].replace(/\+/g, ' '));
	} else {
		return '';
	}
};

export const getAppInfo = (): IAppInfo => {
	const appInfo = {
		appVersion: getURLParameter(globalConstant.URL_PARAMETER.APPVERSION),
		deviceId: getURLParameter(globalConstant.URL_PARAMETER.DEVICE_ID),
		installId: getURLParameter(globalConstant.URL_PARAMETER.INSTALL_ID),
		isVirtual: getURLParameter(globalConstant.URL_PARAMETER.IS_VIRTUAL),
		latitude: getURLParameter(globalConstant.URL_PARAMETER.LATITUDE),
		longitude: getURLParameter(globalConstant.URL_PARAMETER.LONGITUDE),
		manufacturer: getURLParameter(globalConstant.URL_PARAMETER.MANUFACTURER),
		model: getURLParameter(globalConstant.URL_PARAMETER.MODEL),
		platform: getURLParameter(globalConstant.URL_PARAMETER.PLATFORM),
		routingKey: getURLParameter(globalConstant.URL_PARAMETER.ROUTING_KEY),
		serial: getURLParameter(globalConstant.URL_PARAMETER.SERIAL),
		simId: getURLParameter(globalConstant.URL_PARAMETER.SIM_ID),
		version: getURLParameter(globalConstant.URL_PARAMETER.VERSION),
		token: getURLParameter(globalConstant.URL_PARAMETER.TOKEN) || getURLParameter(globalConstant.URL_PARAMETER.VISA),
	};

	return appInfo;
};

export const getConsumerInfo = (): IConsumerInfo => {
	const consumerInfo = {
		consumerId: getURLParameter(globalConstant.URL_PARAMETER.CONSUMER_ID),
		token: getURLParameter(globalConstant.URL_PARAMETER.TOKEN),
		visa: getURLParameter(globalConstant.URL_PARAMETER.VISA),
	};
	return consumerInfo;
};

export const getPrimaryRoute = (accountType: string) => {
	let primaryRoute = '';
	switch (accountType) {
		case 'POSTPAID':
			primaryRoute = 'postpaid';
			break;

		case 'RECEIVED_LIMIT':
			primaryRoute = 'received-limit';
			break;

		default:
			break;
	}
	return primaryRoute;
};

export const isWrouteValue = (paramName: string) => {
	return (
		getURLParameter(globalConstant.URL_PARAMETER.WROUTE) &&
		getURLParameter(globalConstant.URL_PARAMETER.WROUTE) === paramName
	);
};

export const getAppVersion = () => {
	return (
		parseInt(getAppInfo()?.appVersion?.toString().split('.').join('')) ||
		parseInt(getURLParameter(globalConstant.URL_PARAMETER.APPVERSION).toString().split('.').join('')?.trim())
	);
};

export const isJuspayEnabled = () => {
	const appVersionToCheck = isIOS
		? globalConstant.MINIMUM_JUSPAY_VERSION.IOS
		: globalConstant.MINIMUM_JUSPAY_VERSION.ANDROID;
	return getAppVersion() >= appVersionToCheck;
};
