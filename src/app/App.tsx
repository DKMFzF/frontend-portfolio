import { HelmetProvider } from 'react-helmet-async';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import { router } from './routes';
import { Analytic } from './providers/analityc';
import store from './store';
import { YANDEX_METRIC_CODE, GOOOGLE_ANALYSIS_FLOW } from '@config';
import '@styles/index.scss';

export const App = () => (
	<StrictMode>
		<Analytic.Provider
			value={{
				yandexId: YANDEX_METRIC_CODE,
				googleId: GOOOGLE_ANALYSIS_FLOW
			}}
		>
			<Provider store={store}>
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</Provider>
		</Analytic.Provider>
	</StrictMode>
);
