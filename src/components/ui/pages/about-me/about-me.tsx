import { FC } from 'react';
import myImage from '@images/my-photo.jpg';

import styles from './about-me.module.scss';
import { CommonPage } from '@pages';
import { AboutMeArticle, KnowledgeSidebar } from '@components';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles.aboutMe}>
		<div className={styles.aboutMe__content}>
			<AboutMeArticle className={styles.aboutMe__titleContainer}>
				<h1 className={styles.aboutMe__title}>About Me</h1>
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my tech skills'
				className={`${styles.aboutMe__stack} ${styles.aboutMe__cards}`}
			>
				<KnowledgeSidebar />
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my timeline'
				className={`${styles.aboutMe__cards} ${styles.aboutMe__timeline}`}
				borderPrimaryColorFlag
			>
				<h3>My Timeline</h3>
			</AboutMeArticle>

			<article
				className={`${styles.aboutMe__info3} ${styles.aboutMe__block}`}
			>
				<p className={styles.aboutMe__description}>
					Направление: Интеллектуальные системы управления.
				</p>
			</article>

			<article
				className={`${styles.aboutMe__info4} ${styles.aboutMe__block}`}
			>
				<p className={styles.aboutMe__description}>
					Влюблён в сложные алгоритмические задачи по программированию
					и Хакатоны!
				</p>
			</article>
		</div>
	</CommonPage>
);
