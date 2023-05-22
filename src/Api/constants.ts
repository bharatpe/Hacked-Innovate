import { Voucher } from 'assets/svgIcons';

const API = {
	GENERAL: {
		ACCOUNT: '/v1/account',
		ACCESS_FEATURE: '/account/feature-access',
		POSTPE_PAYMENT_MODES: '/account/payment-modes',
		JARVIS: process.env.REACT_APP_JARVIS,
	},

	POSTPE: {
		ACCOUNT_DETAIL: `https://api-postpe.bharatpe.in/postpe/`,
		DEFAULT: `https://api-postpe.bharatpe.in/postpe/v1/`,
	},

	GV: {
		GIFT_VOUCERS: 'https://gv-wrapper-svc.bharatpe.io/giftvoucher/v1',
		CATEGORIES: '/categories',
		GROUPS: '/groups',
		BRANDS: '/brands',
		ORDER:'/order',
		MY_VOUCHERS:'/orders',
		BRANDS_FROM_CATEGORIES: (categoryId: string) => `/categories/${categoryId}/brands`,
		BRANDS_FROM_GROUPS: (groupId: string) => `/groups/${groupId}/brands`,
		VOUCHERS_FROM_BRAND: (brandId: string) => `/brands/${brandId}/vouchers`,
		SELECTED_VOUCHER: (brandId: string, voucherPrice: number) =>
			`/brands/${brandId}/vouchers?voucher_amount=${voucherPrice}`,
		ORDER_STATUS: (orderId: string) => `/order/${orderId}`,
		RESEND_DETAILS: (orderId: string, voucherId:string) => `/order/${orderId}/vouchers/${voucherId}/re-send`,
	},
};
export default API;
