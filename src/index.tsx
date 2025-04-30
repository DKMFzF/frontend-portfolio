import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import store from './services/store';
import 'core-js/stable';
import './styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<Provider store={store}>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</Provider>
	</StrictMode>
);
