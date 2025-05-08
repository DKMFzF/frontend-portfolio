import { FC, ReactNode } from 'react';
import { type routesData } from '@config';

export type TAppLayout = {
	MetaInfo: ReactNode;
	Preloader: FC;
	Header: ReactNode;
	Footer: ReactNode;
	hideHeaderRoutes: routesData[];
	hideFooterRoutes: routesData[];
};
