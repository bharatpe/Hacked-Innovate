import 'index.css';
import 'styles/variables.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

// import * as Sentry from '@sentry/react';
// import { BrowserTracing } from '@sentry/tracing';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { store } from 'store';
import theme from 'theme';

import App from './App';
import ErrorBoundaryFallback from './components/molecules/ErrorBoundaryFallback';

// import pjson from '../package.json';
// import reportWebVitals from './reportWebVitals';
// import * as ServiceWorker from './ServiceWorkerCore';

// const APP_NAME = `${pjson.name}@${pjson.version}`;
// if (
//   process.env.REACT_APP_ENV === 'production' &&
//   process.env.REACT_APP_SENTRY_DSN
// ) {
//   Sentry.init({
//     dsn: process.env.REACT_APP_SENTRY_DSN,
//     integrations: [new BrowserTracing()],
//     release: APP_NAME,
//   });
// }

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			useErrorBoundary: true,
			retry: 0,
			suspense: true,
		},
	},
});
const container = document.getElementById('root');

if (container) {
	const root = createRoot(container);

	root.render(
		<React.StrictMode>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<QueryErrorResetBoundary>
						{({ reset }) => (
							<ErrorBoundary onReset={reset} FallbackComponent={(props) => <ErrorBoundaryFallback {...props} />}>
								<ThemeProvider theme={theme}>
									<CssBaseline />
									<App />
								</ThemeProvider>
							</ErrorBoundary>
						)}
					</QueryErrorResetBoundary>

					{/* {process.env.NODE_ENV === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null} */}
				</QueryClientProvider>
			</Provider>
		</React.StrictMode>,
	);
}

// try {
// 	ServiceWorker.register(pjson.version);
// } catch (e) {
// 	console.error('Service Worker Failed', e); // eslint-disable-line no-console
// }
// reportWebVitals();
