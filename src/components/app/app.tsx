import { AppHeader } from '@components';
import style from './app.module.scss';
import { AboutMePage } from '@pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound404 } from '../../pages';

// TODO: изменить ссылки

export const App = () => {
	const location = useLocation();

	return (
		<div className={style.app}>
			<AppHeader />
			<Routes location={location}>
				<Route path='/' element={<AboutMePage />} />

				{/* <Route path='/' element={<SectionAboutMe />} />
				<Route path='/stack' element={<SectionStack />} />
				<Route path='/portfolio' element={<SectionPortfolio />} /> */}

				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</div>
	);
};
