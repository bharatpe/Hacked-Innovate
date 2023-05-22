import { AxiosRequestConfig } from 'axios';
import { store } from 'store';

export const requestApiInterceptor = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const {
    appConsumerInfo: { appInfo, consumerInfo },
  } = store.getState();
  const token = consumerInfo?.token || consumerInfo?.visa;
  config.headers = {
    token: token,
    latitude: appInfo?.latitude,
    longitude: appInfo?.longitude,
    device: appInfo?.deviceId,
    simid: appInfo?.simId,
    appversion: appInfo?.appVersion,
  };

  return config;
};

export const responseApiInterceptor = (res: unknown): unknown => {
  return res;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const extractor = (response: any) => {
  const { status, data, statusText } = response;
  if (status && status !== 200) throw new Error(statusText);
  return data;
};
