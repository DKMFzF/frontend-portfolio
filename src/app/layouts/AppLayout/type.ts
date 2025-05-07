import { FC, ReactNode } from 'react';

export type TAppLayout = {
	MetaInfo: ReactNode;
	Preloader: FC;
	Header: ReactNode;
	Footer: ReactNode;
	hideHeaderRoutes: string[];
	hideFooterRoutes: string[];
};
