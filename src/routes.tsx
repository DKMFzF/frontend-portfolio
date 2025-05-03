import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components';
import { AboutMePage, NotFound404, PortfolioPage } from './pages';

export const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <AppLayout />,
			children: [
				{
					index: true,
					element: <AboutMePage />
				},
				{
					path: 'portfolio',
					element: <PortfolioPage />
				},
				{
					path: '*',
					element: <NotFound404 />
				}
			]
		}
	],
	{
		basename:
			process.env.NODE_ENV === 'production' ? '/frontend-portfolio' : '/'
	}
);
