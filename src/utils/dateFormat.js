import { format } from 'date-fns';
import differenceInHours from 'date-fns/differenceInHours';
import formatDate from 'date-fns/format';

const dateFormat = (
  dateString,
  parseToSeconds,
  isLastDayOfMonth,
  formatType = 'dd MMM, yy'
) => {
  if (parseToSeconds && !isLastDayOfMonth) {
    var utcSeconds = dateString;
    var d = new Date(0);
    dateString = d.setUTCSeconds(utcSeconds);
  }
  if (isLastDayOfMonth) {
    dateString = new Date(dateString * 1000);
    dateString = new Date(
      dateString.getFullYear(),
      dateString.getMonth() + 1,
      0
    );
    dateString = dateString.getTime() - dateString.getMilliseconds();
  }
  if (!dateString) return;
  dateString =
    dateString.toString().length === 10 ? dateString * 1000 : dateString;
  return format(dateString, formatType);
};

export const formatDateTime = (pattern, timestamp = '') => {
  if (!timestamp) return '';
  const date = new Date(timestamp);
  return formatDate(date, pattern);
};

export const hourDifference = value => {
  if (!value) return 0;
  try {
    const currentDate = new Date();
    return differenceInHours(currentDate, value * 1000);
  } catch {
    return 0;
  }
};

export default dateFormat;
