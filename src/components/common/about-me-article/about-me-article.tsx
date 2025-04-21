import { FC } from 'react';
import { AboutMeArticleUI } from 'src/components/ui';
import { AboutMeArticleProps } from './type';

export const AboutMeArticle: FC<AboutMeArticleProps> = ({
	children,
	subtitle = '',
	className = ''
}) => (
	<AboutMeArticleUI subtitle={subtitle} className={className}>
		{children}
	</AboutMeArticleUI>
);
