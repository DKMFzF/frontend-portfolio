import { FC } from 'react';
import { AboutMeArticleUI } from 'src/components/ui';
import { AboutMeArticleProps } from './type';

export const AboutMeArticle: FC<AboutMeArticleProps> = ({
	children,
	subtitle = '',
	className = '',
	borderPrimaryColorFlag = false
}) => (
	<AboutMeArticleUI
		subtitle={subtitle}
		className={className}
		borderPrimaryColorFlag={borderPrimaryColorFlag}
	>
		{children}
	</AboutMeArticleUI>
);
