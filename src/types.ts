import React from 'react';

declare global {
  interface Window {
    callbackAuthenticateApp: (success: boolean, data: unknown) => void;
    callbackOpenAppSecuritySettings: (
      success?: unknown,
      data?: unknown
    ) => void;
    callbackOpenOrderCard: () => void;
    callbackIncreaseSpendLimit: () => void;
    callbackCardActivityClosed: () => void;
    callbackHyperSdkInitStatus?: any;
    callbackHyperSdkInit?:any
  }
}
export type IDispatcherType = any;

export interface IAppInfo {
  appVersion: string;
  deviceId: string;
  installId: string;
  isVirtual: string;
  latitude: string;
  longitude: string;
  manufacturer: string;
  model: string;
  platform: string;
  routingKey: string;
  serial: string;
  simId: string;
  version: string;
  screenClass?: string;
  token: string;
  openCreditCardModalType?: string;
}

export interface IConsumerInfo {
  consumerId: string;
  token: string;
  visa: string;
  cId?: string;
  firstBillPayment?: boolean;
  billPaymentEnabled?: boolean;
  postpePaymentEnabled?: boolean;
}

export interface IAppConsumerInfo {
  appInfo: IAppInfo;
  consumerInfo: IConsumerInfo;
}

export interface IAuthProps {
  caseSensitive?: boolean;
  children?: React.ReactNode;
  element?: React.ReactNode | null;
  index?: boolean;
  path?: string;
  Component?: React.ReactNode | null;
  title?: string;
}

export interface IApiHeader {
  token: string;
  latitude: string;
  longitude: string;
  installid: string;
  device: string;
  simid: string;
  appversion: string;
}

export interface IInterceptorConfig {
  headers: IApiHeader;
}

export interface ChangeHistoryProps {
  action: 'push' | 'back';
  path?: string;
  routeState?: unknown;
}
export interface KeyValuePair {
  [field: string]: string | number;
}

export interface INativeSupport extends KeyValuePair {
  key: number;
}

export interface IOptions {
  path: string;
  params: unknown;
}

export interface IService {
  api: () => void;
  options?: IOptions;
  disableApi?: boolean;
  hideLoader?: boolean;
}

export interface IPostPaidAccount {
  accountLimit: number;
  accountStatus: string;
  agreement: number;
  availableLimit: number;
  billAmount: number;
  clearDueAllowed: boolean;
  coachmarksShown: boolean;
  dueAmount: number;
  dueBillAmount?: number;
  dueDate?: string;
  dueNowAmount?: number;
  duePenalty?: number;
  emiAllowed: boolean;
  emiAmount: number;
  hasPastBills: boolean;
  hasTakenLoan: boolean;
  lender: string;
  lenderLogo: string;
  logoutTriggered: boolean;
  maximumLimit: number;
  monthlyLimit: number;
  penalty?: number;
  perTxnLimit: number;
  receivedAmount: number;
  repaymentAmount: number;
  totalDueAmount?: number;
  totalUsedAmount: number;
  usedLimit: number;
  yearlyLimit: number;
  usedBreakup: IUsedBreakup;
}

export interface IUsedBreakup {
  emiDue: number;
  futureEmiAmount: number;
  previousBalance: number;
  spent: number;
}

export interface IUserDataDto {
  addr: string;
  dob: string;
  email: string;
}

export interface IAccountDetails {
  acChangeAllowed: boolean;
  accountLimit: number;
  accountStatus: string;
  accountType: string;
  activatedAt: string;
  agreement: number;
  appVersion: string;
  availableLimit: number;
  billDetails: string;
  cardActivated: boolean;
  cashbackTier: number;
  clearDueAllowed: boolean;
  closedDate: string;
  coachmarksShown: boolean;
  consumerId: number;
  createdAt: string;
  creditLimitUpdated: boolean;
  crmBillResponseDto?: string;
  dpdDays?: string;
  dueAmount: number;
  dueBillAmount?: number;
  dueDate: string;
  dueNowAmount: number;
  duePenalty: number;
  emiAllowed: boolean;
  emiAmount: number;
  hasPastBills: boolean;
  hasTakenLoan: boolean;
  highestDpdDays?: string;
  isEditable: boolean;
  kycFailureReason?: string;
  kycLevel: number;
  kycStatus: string;
  lender: string;
  lenderLogo: string;
  logoutTriggered: boolean;
  maxCashbackForUser?: number;
  maximumLimit: number;
  mobileNumber: string;
  monthlyLimit: number;
  nbfcName?: string;
  panHolderName?: string;
  panNumber: string;
  penalty?: number;
  perTxnLimit: number;
  permanentBlockUserDetail?: string;
  permanentBlockedUser: boolean;
  platform: string;
  postPaidAccount: IPostPaidAccount;
  prePaidAccount?: string;
  receivedAmount: number;
  referredBy?: string;
  repaymentAmount: number;
  sanctionLetterPresent: boolean;
  sendMoneyAllowed: boolean;
  totalCashbackAmount?: number;
  totalDueAmount: number;
  totalUsedAmount: number;
  usedBreakup: IUsedBreakup;
  usedLimit: number;
  verifiedName: string;
  userDataDto: IUserDataDto;
  yearlyLimit: number;
}

export interface IError {
  name: string;
  message: string;
  code: string;
  stack: string;
  data?: unknown;
}

export interface IFeatureAccess {
  CC_BILL_PAYMENT: {
    firstPayment: boolean;
    enabled: boolean;
  };
  POSTPE_PAYMENT_MODE: {
    enabled: boolean;
  };
  CARD_TOKENIZATION: {
    enabled: boolean;
  };
  SEND_MONEY_TO_CONTACT: {
    enabled: boolean;
  };
  BBPS: {
    enabled: boolean | null;
  };
  JUSPAY_TOKENIZATION: {
    enabled: boolean;
  };
}

export interface IResponseError {
  message: string;
}


export interface IFaqType {
  childFaq: string;
  parentFaq: string;
}
