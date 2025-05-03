import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'core-js/stable';
import { router } from './routes';
import { Analytic } from './context/analityc';
import store from './services/store';
import { YANDEX_METRIC, GOOOGLE_ANALYSIS } from '@utils-constants';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Analytic.Provider
			value={{
				yandexId: YANDEX_METRIC,
				googleId: GOOOGLE_ANALYSIS
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
