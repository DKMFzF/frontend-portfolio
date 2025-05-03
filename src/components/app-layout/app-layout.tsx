import { AppHeader, AppFooter, SEO, Preloader } from '@components';
import { SeoData } from '@utils-constants';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import style from './app.module.scss';

export const AppLayout = () => (
	<>
		<SEO
			title={SeoData.title.default}
			description={SeoData.description}
			name={SeoData.name}
			type={SeoData.type}
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
