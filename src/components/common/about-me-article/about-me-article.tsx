import { FC } from 'react';
import { AboutMeArticleUI } from 'src/components/ui';
import { AboutMeArticleProps } from './type';

export const AboutMeArticle: FC<AboutMeArticleProps> = ({
	children,
	subtitle = '',
	className = '',
	borderPrimaryColorFlag = false,
	paddingFlag = false,
	borderRadiusFlag = false
}) => (
	<AboutMeArticleUI
		subtitle={subtitle}
		className={className}
		borderPrimaryColorFlag={borderPrimaryColorFlag}
		paddingFlag={paddingFlag}
		borderRadiusFlag={borderRadiusFlag}
	>
		{children}
	</AboutMeArticleUI>
);
