export interface FaqProps {
  title: string;
  content: JSX.Element;
}

export interface TxnStatusProps {
  paymentMode: string;
  partnerId: string;
}

export interface IShortFaqProps {
  faqCategory: string;
  faqSubType: string | TxnStatusProps;
  faqList: Array<FaqProps>;
  faqClass?: Record<string, React.CSSProperties>;
  transactionDetails?: TxnStatusProps;
}
