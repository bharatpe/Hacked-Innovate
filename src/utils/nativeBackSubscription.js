/* eslint-disable no-console */
import { NativeSupportHandlerV2 } from 'native-support-handler';
import history from 'utils/history';
let goToNative = false;
const setNativeRoute = (isNative) => {
	goToNative = isNative;
};

/**
 * @function preventBackButton
 * @description prevent default native back button functionality
 */
const preventBackButton = (() => {
	let preventCallback = () => true;

	// restore to default back button functionality
	history.listen(() => {
		preventCallback = () => true;
	});

	// return closure function
	return function (callback) {
		if (callback === 'RETURN') {
			if (!preventCallback) {
				console.error('prevent default callback not found!', ' preventCallback = ', preventCallback);
				return false;
			}
			return preventCallback();
		}
		preventCallback = callback;
	};
})();

/**
 * @function closeWebView
 * @description close web view
 */
const closeWebView = () => {
	NativeSupportHandlerV2.closeWebView()
		.then(() => {
			// do something on webview closed
		})
		.catch(() => {
			console.error('Error while closing Web view');
		});
};

/**
 * @function subscribeBackButton
 * @description init native back button functionality
 */
const subScribeBackButton = async () => {
	try {
		const isSubscribed = await NativeSupportHandlerV2.subscribeBackButton();
		if (isSubscribed) {
			window.callbackSubscribeBackPressed = () => {
				if (!preventBackButton('RETURN')) {
					return;
				}

				// back to native on native back button click
				if (history.length <= 1 || goToNative) {
					closeWebView();
				} else {
					window.history.back();
				}
			};
		}
	} catch (e) {
		console.error('Nothing to worry ! We handled it well');
		console.warn(e);
	}
};

export { subScribeBackButton, setNativeRoute, preventBackButton, closeWebView };
