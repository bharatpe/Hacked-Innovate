// import { store } from 'store/store';
import { getAppInfoNative, sendCleverTapEvent } from 'utils/nativeHandler';

export const CleverTapEventV2 = {
  send: async (eventName: string, eventParams: object) => {
    const DEFAULT_PARAMS = {
      // mobile: store.getState().mobileNumber,
      latitude: (await getAppInfoNative()).latitude || '',
      longitude: (await getAppInfoNative()).longitude || '',
      marketing_event: 'yes',
    };

    const params = { ...DEFAULT_PARAMS, ...eventParams };
    sendCleverTapEvent(eventName, params);
  },
};
