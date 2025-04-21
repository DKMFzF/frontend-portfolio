import { FC } from 'react';
import styles from './about-me-article.module.scss';
import { AboutMeArticleUIProps } from './type';

export const AboutMeArticleUI: FC<AboutMeArticleUIProps> = ({
	children,
	subtitle,
	className = '',
	borderPrimaryColorFlag = false
}) => (
	<article
		className={`${styles.aboutMe__block} ${className} 
		${
			borderPrimaryColorFlag
				? styles.aboutMe__borderPrimaty
				: styles.aboutMe__borderDefault
		}`}
	>
		{subtitle && (
			<header className={styles.aboutMe__subTitle}>
				<h3>{subtitle}</h3>
			</header>
		)}
		{children}
	</article>
);
