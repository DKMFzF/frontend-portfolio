import { AppHeader, AppFooter } from '@components';
import style from './app.module.scss';
import { AboutMePage, PortfolioPage } from '@pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound404 } from '../../pages';

export const App = () => {
	const location = useLocation();

	return (
		<div className={style.app}>
			<AppHeader />

			<Routes location={location}>
				<Route path='/' element={<AboutMePage />} />
				<Route path='/portfolio' element={<PortfolioPage />} />
				<Route path='*' element={<NotFound404 />} />
			</Routes>

			<AppFooter />
		</div>
	);
};
