import { Outlet, useLocation } from 'react-router-dom';
import { FC, Suspense } from 'react';
import { TransitionOverlayPage } from '@ui';
import style from './AppLayout.module.scss';
import { TAppLayout } from './type';
import { type routesData } from '@config';

export const AppLayout: FC<TAppLayout> = ({
	MetaInfo,
	Preloader,
	Header,
	Footer,
	hideHeaderRoutes,
	hideFooterRoutes
}) => {
	const location = useLocation();

	const shouldHideFooter = hideFooterRoutes.includes(
		location.pathname as routesData
	);
	const shouldHideHeader = hideHeaderRoutes.includes(
		location.pathname as routesData
	);

	return (
		<>
			{MetaInfo}
			<TransitionOverlayPage />
			<div className={style.app}>
				{!shouldHideHeader && Header}
				<Suspense fallback={<Preloader />}>
					<Outlet />
				</Suspense>
				{!shouldHideFooter && Footer}
			</div>
		</>
	);
};
