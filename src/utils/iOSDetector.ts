// Is iOS
const userAgent = navigator.userAgent.toLowerCase();
const isIOS: boolean = /iphone|ipod|ipad/.test(userAgent);
export default isIOS;
