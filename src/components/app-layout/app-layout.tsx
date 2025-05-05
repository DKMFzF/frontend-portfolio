import { AppHeader, AppFooter, Preloader, MetaHead } from '@components';
import {
	SeoData,
	YANDEX_METRIC,
	GOOOGLE_ANALYSIS,
	googleVerificationCode
} from '@utils-constants';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import style from './app.module.scss';

export const AppLayout = () => {
	const location = useLocation();
	const hideFooterRoutes = ['/portfolio'];
	const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
	return (
		<>
			<MetaHead
				lang={SeoData.lang.en}
				title={SeoData.title.default}
				description={SeoData.description}
				keywords={SeoData.keywords}
				name={SeoData.name}
				type={SeoData.type}
				yandexIdMetrika={YANDEX_METRIC}
				googleFlowAnalysis={GOOOGLE_ANALYSIS}
				googleVerificationCode={googleVerificationCode}
			/>
			<div className={style.app}>
				<AppHeader />
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
				{!shouldHideFooter && <AppFooter />}
			</div>
		</>
	);
};
