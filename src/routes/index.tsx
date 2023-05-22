/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes, unstable_HistoryRouter as Router } from 'react-router-dom';

import { ROUTE_CONSTANT } from 'constants/routesConstants';
import Home from 'containers/Home';
import history from 'utils/history';
import Postpe from 'containers/Postpe';

/**
 * the webpack prefetch comment is a magic comment api
 * that tells webpack to load the file after rendering the main home page
 * This helps in preventing showing the loading screen on each route change
 */

// const DetailedFAQ = lazy(() => import(/* webpackPrefetch: true */ 'components/organisms/DetailedFaqList'));
// const Home = lazy(() => import(/* webpackPrefetch: true */ 'containers/Home'));
// const VouchersList = lazy(() => import(/* webpackPrefetch: true */ 'containers/VouchersList'));
// // const MyVouchers = lazy(() => import(/* webpackPrefetch: true */ 'containers/MyVouchers'));
// const StatusScreen = lazy(() => import(/* webpackPrefetch: true */ 'containers/StatusScreen'));
// const SearchScreen = lazy(() => import(/* webpackPrefetch: true */ 'containers/SearchScreen'));
// const VoucherLandingPage = lazy(() => import(/* webpackPrefetch: true */ 'containers/VoucherLandingPage'));
// const VoucherOrderDetails = lazy(() => import(/* webpackPrefetch: true */ 'containers/VoucherOrderDetails'));
// const VoucherPurchaseDetails = lazy(() => import(/* webpackPrefetch: true */ 'containers/VoucherPurchaseDetails'));
// const CategoryPage = lazy(() => import(/* webpackPrefetch: true */ 'containers/Category'));
// const SubCategoryPage = lazy(() => import(/* webpackPrefetch: true */ 'containers/SubCategory'));


const AppRoutes: React.FC = () => {
	return (
		/**
		 * Some Fallback is needed here otherwise
		 * a blank screen will be shown until the code
		 * for the particular screen in loaded
		 */
		<Suspense fallback={<></>}>
			{/* @ts-ignore */}
			<Router history={history}>
				<Routes>
					<Route path={ROUTE_CONSTANT.VOUCHERS.HOME} element={<Home />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.POSTPE} element={<Postpe />} />
					{/* <Route path={ROUTE_CONSTANT.VOUCHERS.MY} element={<MyVouchers />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.LIST} element={<VouchersList />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.CATEGORY} element={<CategoryPage />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.SUB_CATEGORY} element={<SubCategoryPage />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.SEARCH} element={<SearchScreen />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.STATUS_SCREEN} element={<StatusScreen />} />

					<Route path={ROUTE_CONSTANT.VOUCHERS.VOUCHER_LANDING} element={<VoucherLandingPage />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.VOUCHER_DETAILS} element={<VoucherOrderDetails />} />
					<Route path={ROUTE_CONSTANT.VOUCHERS.FINAL_SCREEN} element={<VoucherPurchaseDetails />} />

					<Route path={ROUTE_CONSTANT.GV.FAQS} element={<DetailedFAQ />} /> */}
					{/* <Route path="*" element={<Navigate to={ROUTE_CONSTANT.VOUCHERS.HOME} />} /> */}
				</Routes>
			</Router>
		</Suspense>
	);
};

export default AppRoutes;
