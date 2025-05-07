import { Outlet, useLocation } from 'react-router-dom';
import { FC, Suspense } from 'react';
import style from './AppLayout.module.scss';
import { TAppLayout } from './type';

export const AppLayout: FC<TAppLayout> = ({
	MetaInfo,
	Preloader,
	Header,
	Footer,
	hideHeaderRoutes,
	hideFooterRoutes
}) => {
	const location = useLocation();

	const shouldHideFooter = hideFooterRoutes.includes(location.pathname);
	const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

	return (
		<>
			{MetaInfo}
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
