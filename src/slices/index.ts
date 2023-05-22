import { useSelector } from 'react-redux';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IAccountDetails, IAppInfo, IFaqType, IFeatureAccess } from '../types';
import { getAppInfo } from 'utils/App';

import { AccountAPI, FeatureAccessAPI } from '../Api/services';

interface IAction<T = unknown> {
  type: string | symbol;
  payload: T;
}

interface IAPIAction<T = unknown> extends IAction<T> {
  meta: unknown;
  error: {
    name: string;
    message: string;
    stack: string;
  };
}

const INIT_FEATURE_ACCESS: IFeatureAccess = {
  CC_BILL_PAYMENT: {
    firstPayment: false,
    enabled: false,
  },
  POSTPE_PAYMENT_MODE: {
    enabled: false,
  },
  CARD_TOKENIZATION: {
    enabled: false,
  },
  BBPS: {
    enabled: null,
  },
  JUSPAY_TOKENIZATION: {
    enabled: false,
  },
  SEND_MONEY_TO_CONTACT: {
    enabled: false,
  },
};

const INITIAL_STATE = () => ({
  featureAccess: INIT_FEATURE_ACCESS,
  accountDetail: {} as IAccountDetails,
  loading: false,
  error: '',
  screenClass: '',
  faq: {} as IFaqType,
  appInfo: getAppInfo(),
});

export const FeatureAccess = createAsyncThunk(
  'postpe/feature-access',
  FeatureAccessAPI
);

export const AccountDetail = createAsyncThunk('postpe/account', AccountAPI);

const setAPIError = (
  state: ReturnType<typeof INITIAL_STATE>,
  action: IAPIAction
) => {
  state.loading = false;
  state.error = action.error.message || 'Something went wrong';
};

export const AppSlice = createSlice({
  name: 'App',
  initialState: INITIAL_STATE(),
  reducers: {
    RESET: state => Object.assign(state, INITIAL_STATE()),
    RESET_FEATURE_ACCESS: state => {
      state.featureAccess = INIT_FEATURE_ACCESS;
    },
    SET_SCREEN_CLASS: (state, { payload }) => {
      state.screenClass = payload.payload;
    },
    SET_FAQ: (state, { payload }) => {
      state.faq = payload.payload;
    },
    SET_APP_INFO: (state, { payload }) => {
      state.appInfo = { ...getAppInfo(), ...payload.payload };
    },
  },
  extraReducers: {
    [FeatureAccess.pending.toString()]: (
      state: ReturnType<typeof INITIAL_STATE>
    ) => {
      state.loading = true;
    },
    [FeatureAccess.rejected.toString()]: setAPIError,
    [FeatureAccess.fulfilled.toString()]: (
      state,
      action: IAPIAction<IFeatureAccess>
    ) => {
      state.loading = false;
      state.featureAccess = action.payload || INIT_FEATURE_ACCESS;
    },
    [AccountDetail.pending.toString()]: (
      state: ReturnType<typeof INITIAL_STATE>
    ) => {
      state.loading = true;
    },
    [AccountDetail.rejected.toString()]: setAPIError,
    [AccountDetail.fulfilled.toString()]: (
      state,
      action: IAPIAction<IAccountDetails>
    ) => {
      state.loading = false;
      state.accountDetail = action.payload;
    },
  },
});

export const {
  RESET,
  RESET_FEATURE_ACCESS,
  SET_SCREEN_CLASS,
  SET_FAQ,
  SET_APP_INFO,
} = AppSlice.actions;

export interface IAppStates {
  [AppSlice.name]: ReturnType<typeof AppSlice.reducer>;
}

export const featureAccessSelector = (state: IAppStates): IFeatureAccess => {
  return state[AppSlice.name]?.featureAccess || INIT_FEATURE_ACCESS;
};

export const useFeatureAccess = (): IFeatureAccess =>
  useSelector(featureAccessSelector);

export const accountDetailSelector = (state: IAppStates): IAccountDetails => {
  return state[AppSlice.name]?.accountDetail;
};

export const faqDetailSelector = (state: IAppStates): IFaqType => {
  return state[AppSlice.name]?.faq;
};

export const useAccountDetail = (): IAccountDetails =>
  useSelector(accountDetailSelector);

export const useFaqDetail = (): IFaqType => useSelector(faqDetailSelector);

export const loadingSelector = (state: IAppStates): boolean => {
  return state[AppSlice.name]?.loading;
};

export const useLoading = (): boolean => useSelector(loadingSelector);

export const screenClassSelector = (state: IAppStates): string => {
  return state[AppSlice.name]?.screenClass;
};

export const useScreenClass = (): string => useSelector(screenClassSelector);

export const appInfoSelector = (state: IAppStates): IAppInfo => {
  return state[AppSlice.name]?.appInfo;
};

export const useAppInfo = (): IAppInfo => useSelector(appInfoSelector);
