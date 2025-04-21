import { FC } from 'react';
import styles from './about-me-article.module.scss';
import { AboutMeArticleUIProps } from './type';

export const AboutMeArticleUI: FC<AboutMeArticleUIProps> = ({
	children,
	subtitle,
	className = ''
}) => (
	<article className={`${styles.aboutMe__block} ${className}`}>
		{subtitle && (
			<header className={styles.aboutMe__subTitle}>
				<h3>{subtitle}</h3>
			</header>
		)}
		{children}
	</article>
);
