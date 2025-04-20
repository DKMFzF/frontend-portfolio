import { Route, Routes } from 'react-router-dom';
import { SectionAboutMe, SectionPortfolio } from 'src/components';
import { MainPageUI } from 'src/components/ui/pages/main/main';

export const MainPage = () => (
	<MainPageUI>
		<Routes>
			<Route path='/' element={<SectionAboutMe />} />
			{/* <Route path='/stack' element={<SectionStack />} /> */}
			<Route path='/portfolio' element={<SectionPortfolio />} />
		</Routes>
	</MainPageUI>
);
