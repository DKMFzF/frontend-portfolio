import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components';
import { AboutMePage, NotFound404, PortfolioPage } from './pages';

const basename =
	process.env.NODE_ENV === 'production' ? '/frontend-portfolio' : '/';

export const router = createBrowserRouter([
	{
		path: basename,
		element: <AppLayout />,
		children: [
			{
				index: true,
				element: <AboutMePage />
			},
			{
				path: `${basename}/portfolio`,
				element: <PortfolioPage />
			},
			{
				path: '*',
				element: <NotFound404 />
			}
		]
	}
]);
