import { AppHeader } from '@components';
import style from './app.module.scss';
import { MainPage } from '../../pages/main';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NotFound404 } from '../../pages';

export const App = () => {
	const location = useLocation();

	return (
		<div className={style.app}>
			<AppHeader />
			<Routes location={location}>
				<Route path='/' element={<MainPage />} />

				{/* <Route path='/' element={<Stack />} /> */}

				{/* <Route path='/' element={<Portfolio />} /> */}

				<Route path='*' element={<NotFound404 />} />
			</Routes>
		</div>
	);
};
