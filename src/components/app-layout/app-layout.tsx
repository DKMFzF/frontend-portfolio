import { AppHeader, AppFooter, Preloader, MetaHead } from '@components';
import {
	SeoData,
	YANDEX_METRIC,
	GOOOGLE_ANALYSIS,
	googleVerificationCode
} from '@utils-constants';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './app.module.scss';

export const AppLayout = () => (
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
			<AppFooter />
		</div>
	</>
);
