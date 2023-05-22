import formatDate from 'date-fns/format';

export const formatDateTime = (
  timestamp: string | number,
  showTime = false,
  pattern?: string,
  secondsToAdd?: number
): string => {
  if (!timestamp) return '';
  if (!pattern) {
    pattern = showTime ? 'dd/MM/yy HH:mm' : 'dd/MM/yy';
  }
  const date = new Date(timestamp);
  if (secondsToAdd && secondsToAdd > 0) {
    date.setSeconds(date.getSeconds() + secondsToAdd);
  }
  return formatDate(date, pattern);
};

export const formatCurrency = (value: number | string): string => {
  if (!value) return '₹0';
  if (value === '0') return '₹0';
  return '₹' + Number.parseFloat(value as string).toLocaleString('en-IN');
};

export const formatNumber = (value: number | string): string => {
  if (!value) return '0';
  if (value === '0') return '0';
  return Number.parseFloat(value as string).toLocaleString('en-IN');
};

export const TRANSACTION_STATUS: Record<string, string> = {
  SUCCESS: 'Transaction Successful',
  PENDING: 'Transaction Pending',
  FAILED: 'Transaction Failed',
  CANCELLED: 'Transaction Cancelled',
};

export const formatStatus = (status: string): string =>
  Object.keys(TRANSACTION_STATUS).find(
    key => TRANSACTION_STATUS[key] === status
  ) || '';
