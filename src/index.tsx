import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import { Analytic } from './context/analityc';
import store from './services/store';
import 'core-js/stable';
import './styles/index.scss';

const basename =
	process.env.NODE_ENV === 'production' ? '/frontend-portfolio' : '/';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Analytic.Provider
			value={{ yandexId: 101530999, googleId: 'G-QC3J4L6VP4' }}
		>
			<Provider store={store}>
				<HelmetProvider>
					<BrowserRouter basename={basename}>
						<App />
					</BrowserRouter>
				</HelmetProvider>
			</Provider>
		</Analytic.Provider>
	</StrictMode>
);
