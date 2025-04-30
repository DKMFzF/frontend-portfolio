import { AppHeader, AppFooter, SEO } from '@components';
import { AboutMePage, PortfolioPage } from '@pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound404 } from '@pages';
import { SeoData } from '@utils-constants';
import style from './app.module.scss';

export const App = () => {
	const location = useLocation();

	return (
		<>
			<SEO
				title={SeoData.title.default}
				description={SeoData.description}
				name={SeoData.name}
				type={SeoData.type}
			/>
			<div className={style.app}>
				<AppHeader />

				<Routes location={location}>
					<Route path='/' element={<AboutMePage />} />
					<Route path='/portfolio' element={<PortfolioPage />} />
					<Route path='*' element={<NotFound404 />} />
				</Routes>

				<AppFooter />
			</div>
		</>
	);
};
