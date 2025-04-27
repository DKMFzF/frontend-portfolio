import { ReactNode } from 'react';

export interface AboutMeArticleProps {
	children: ReactNode;
	subtitle?: string;
	className?: string;
	borderPrimaryColorFlag?: boolean;
	paddingFlag?: boolean;
	borderRadiusFlag?: boolean;
	borderFlag?: boolean;
}
