import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './components';
import { lazy } from 'react';
import { NotFound404 } from '@pages';

const AboutMePage = lazy(
	() =>
		import(
			/* webpackChunkName: "about-me-page" */ './pages/about-me/about-me'
		)
);
const PortfolioPage = lazy(
	() =>
		import(
			/* webpackChunkName: "portfolio-page" */ './pages/portfolio/portfolio'
		)
);

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
	]
	// {
	// 	basename:
	// 		process.env.NODE_ENV === 'production' ? '/frontend-portfolio' : '/'
	// }
);
