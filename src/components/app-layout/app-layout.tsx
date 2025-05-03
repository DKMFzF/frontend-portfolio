import { AppHeader, AppFooter, Preloader, MetaHead } from '@components';
import { SeoData, YANDEX_METRIC, GOOOGLE_ANALYSIS } from '@utils-constants';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './app.module.scss';

export const AppLayout = () => (
	<>
		<MetaHead
			title={SeoData.title.default}
			description={SeoData.description}
			name={SeoData.name}
			type={SeoData.type}
			yandexIdMetrika={YANDEX_METRIC}
			googleFlowAnalysis={GOOOGLE_ANALYSIS}
		/>
		<div className={style.app}>
			<AppHeader />
			<Suspense fallback={<Preloader />}>
				<Outlet />
			</Suspense>
			<AppFooter />
		</div>
	</>
);
