import { Outlet, useLocation } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { TransitionOverlayPage } from '@ui';
import style from './AppLayout.module.scss';
import { TAppLayout } from './type';
import { type routesData } from '@config';
import { MouseFollower } from '@features';

export const AppLayout: FC<TAppLayout> = ({
	MetaInfo,
	Preloader,
	Header,
	Footer,
	hideHeaderRoutes,
	hideFooterRoutes
}) => {
	const location = useLocation();

	const isSketchDetail = /^\/sketches\/[^/]+$/.test(location.pathname);

	const shouldHideFooter = hideFooterRoutes.some(
		(route) =>
			route === location.pathname ||
			(route === '/sketches/:sketchId' && isSketchDetail)
	);

	const shouldHideHeader = hideHeaderRoutes.includes(
		location.pathname as routesData
	);

	return (
		<>
			{MetaInfo}
			<MouseFollower />
			<TransitionOverlayPage />
			<div id='page-content' className={style.app}>
				{!shouldHideHeader && Header}
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
				{!shouldHideFooter && Footer}
			</div>
		</>
	);
};
