import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { router } from './routes';
import { Analytic } from './context/analityc';
import store from './services/store';
import 'core-js/stable';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Analytic.Provider
			value={{ yandexId: 101530999, googleId: 'G-QC3J4L6VP4' }}
		>
			<Provider store={store}>
				<HelmetProvider>
					<RouterProvider router={router} />
				</HelmetProvider>
			</Provider>
		</Analytic.Provider>
	</StrictMode>
);
