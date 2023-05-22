import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CancelToken,
} from 'axios';

import { IError, IResponseError } from '../../types';
import { getAppInfo } from '../../utils/App';
import API from '../constants';

const Request = axios.create({
  baseURL: API.POSTPE.ACCOUNT_DETAIL,
  headers: { 'Content-Type': 'application/json' },
});

const serializeError = (error: AxiosError<IResponseError>): IError => {
  const se = {} as IError;
  const { response } = error;
  if (!response) throw error;
  const { status, data } = response;
  se.name = 'API ERROR';
  se.message = data?.message || 'Something went wrong. Please retry!';
  se.code = status.toString();
  se.stack = JSON.stringify(error.toJSON());
  return se;
};

const appInfo = getAppInfo();

const tokenHeaderInterceptor:any = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  config.headers = {
    token: appInfo.token,
    latitude: appInfo.latitude,
    longitude: appInfo.longitude,
    device: appInfo.deviceId,
    simid: appInfo.simId,
    appversion: appInfo.appVersion,
  };

  return config;
};

const onErrorInterceptor = (error: AxiosError<IResponseError>): IError => {
  throw serializeError(error); // eslint-disable-line  @typescript-eslint/no-throw-literal
};

Request.interceptors.request.use(tokenHeaderInterceptor);
Request.interceptors.response.use(undefined, onErrorInterceptor);

interface IAPIResponse<T> {
  statusCode: string;
  message: string;
  data: T;
}

const extractor = <T>(response: AxiosResponse<IAPIResponse<T>>) => {
  const { status, data, statusText } = response;
  if (status !== 200) throw new Error(statusText);
  if (!data || data.statusCode !== '200') throw new Error(data.message);
  return data.data;
};

interface IGetParams {
  [field: string]: string | number;
}

export const Get = <T>(
  path: string,
  params?: Partial<IGetParams>,
  cancelToken?: CancelToken
): Promise<T> =>
  Request.get<IAPIResponse<T>>(path, { params, cancelToken }).then(extractor);

export const Post = <T>(
  path: string,
  payload: unknown,
  cancelToken?: CancelToken
): Promise<T> =>
  Request.post<IAPIResponse<T>>(path, payload, { cancelToken }).then(extractor);

export const Put = <T>(
  path: string,
  payload: unknown,
  cancelToken?: CancelToken
): Promise<T> =>
  Request.put<IAPIResponse<T>>(path, payload, { cancelToken }).then(extractor);
