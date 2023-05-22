/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  NativeSupportHandlerV2,
  NativeSupportHandlerLegacy,
} from 'native-support-handler';

import isIOS from './iOSDetector';

export const getURLParameter = (qrString: string, paramName: string) => {
  const qr = qrString.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${paramName}=([^&#]*)`);
  const results = regex.exec(qr);

  return results && results.length > 0
    ? decodeURIComponent(results[1].replace(/\+/g, ' '))
    : '';
};

export const initImmediateNativeSupport = (): void => {
  if (isIOS) {
    NativeSupportHandlerLegacy.initImmediate();
  }
};

export const initNativeSupport = async () => {
  await NativeSupportHandlerV2.init();
};

export const closeNativeSupport = () => {
  NativeSupportHandlerV2.closeWebView()
    .then(res => console.log(res)) // eslint-disable-line no-console
    .catch(err => console.error(err)); // eslint-disable-line no-console
};
