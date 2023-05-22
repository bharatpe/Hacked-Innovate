const getURLParameter = (
  paramName: string,
  URLString = window.location.href
): string => {
  const regex = new RegExp('[\\?&]' + paramName + '=([^&#]*)');
  const results = regex.exec(URLString);

  if (results && results.length > 0) {
    return decodeURIComponent(results[1].replace(/\+/g, ' '));
  } else {
    return '';
  }
};

export default getURLParameter;
