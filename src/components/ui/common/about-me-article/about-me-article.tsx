import { FC } from 'react';
import styles from './about-me-article.module.scss';
import { AboutMeArticleUIProps } from './type';

export const AboutMeArticleUI: FC<AboutMeArticleUIProps> = ({
	children,
	subtitle,
	className = '',
	borderPrimaryColorFlag = false,
	paddingFlag = false,
	borderRadiusFlag = false,
	borderFlag = false
}) => (
	<article
		className={`${styles.aboutMe__block} ${className} 
		${borderPrimaryColorFlag ? styles.aboutMe__borderPrimaty : ''}
		${!paddingFlag ? styles.aboutMe__paddingDefault : ''}
		${borderRadiusFlag ? styles.aboutMe__borderRadiusDefault : ''}
		${borderFlag ? styles.aboutMe__borderFlag : ''}`}
	>
		{subtitle && (
			<header className={styles.aboutMe__subTitle}>
				<h3>{subtitle}</h3>
			</header>
		)}
		{children}
	</article>
);
