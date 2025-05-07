import { FC } from 'react';
import { AboutMeArticleProps } from './type';
import styles from './AboutMeArticle.module.scss';

export const AboutMeArticle: FC<AboutMeArticleProps> = ({
	children,
	subtitle,
	className = '',
	borderPrimaryColorFlag = false,
	paddingFlag = false,
	borderRadiusFlag = false,
	borderFlag = false,
	flexFlag = false
}) => (
	<article
		className={`${styles['about-me__block']} ${className} 
		${borderPrimaryColorFlag ? styles['about-me__border-primaty'] : ''}
		${!paddingFlag ? styles['about-me__padding-default'] : ''}
		${borderRadiusFlag ? styles['about-me__border-radius-default'] : ''}
		${borderFlag ? styles['about-me__border-flag'] : ''}
		${flexFlag ? styles['about-me__flex-flag'] : ''}`}
	>
		{subtitle && (
			<header className={styles['about-me__sub-title']}>
				<h3>{subtitle}</h3>
			</header>
		)}
		{children}
	</article>
);
