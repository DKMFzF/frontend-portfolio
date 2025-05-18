import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@layouts';
import { lazy } from 'react';
import { NotFound404Page } from '@pages';
import { Meta } from '@meta';
import {
	GOOOGLE_ANALYSIS_FLOW,
	GOOOGLE_BROWSER_VERIFICATION_CODE,
	META_SITE_DATA,
	YANDEX_METRIC_CODE
} from '@config';
import { Preloader } from '@ui';
import { Header, Footer } from '@widgets';
import { SocialLinks } from '@providers';

const AboutMePage = lazy(
	() =>
		import(
			/* webpackChunkName: "about-me-page" */ '../pages/AboutMePage/ui/AboutMe/AboutMePage'
		)
);
const PortfolioPage = lazy(
	() =>
		import(
			/* webpackChunkName: "portfolio-page" */ '../pages/PortfolioPage/ui/Portfolio/Portfolio'
		)
);
const SketchesPage = lazy(
	() =>
		import(
			/* webpackChunkName: "sketches-page" */ '../pages/SketchesPage/ui/Sketches/Sketches'
		)
);

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<SocialLinks.Provider
				value={{
					email: 'flim.win@yandex.ru',
					github: 'https://github.com/DKMFZF',
					telegram: 'https://t.me/DKMFZF'
				}}
			>
				<AppLayout
					MetaInfo={
						<Meta
							lang={META_SITE_DATA.lang.en}
							title={META_SITE_DATA.titles.default}
							description={META_SITE_DATA.description}
							keywords={META_SITE_DATA.keywords}
							name={META_SITE_DATA.name}
							type={META_SITE_DATA.type}
							yandexIdMetrika={YANDEX_METRIC_CODE}
							googleFlowAnalysis={GOOOGLE_ANALYSIS_FLOW}
							googleVerificationCode={
								GOOOGLE_BROWSER_VERIFICATION_CODE
							}
						/>
					}
					Preloader={Preloader}
					Header={<Header />}
					Footer={<Footer />}
					hideHeaderRoutes={[]}
					hideFooterRoutes={['/portfolio']}
				/>
			</SocialLinks.Provider>
		),
		children: [
			{ index: true, element: <AboutMePage /> },
			{ path: 'portfolio', element: <PortfolioPage /> },
			{ path: 'sketches', element: <SketchesPage /> },
			{ path: '*', element: <NotFound404Page /> }
		]
	}
]);
