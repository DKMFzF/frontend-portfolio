import { FC } from 'react';
import myImage from '@images/my-photo.jpg';

import styles from './about-me.module.scss';
import { CommonPage } from '@pages';
import { KnowledgeSidebar } from '@components';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles.aboutMe}>
		<div className={styles.aboutMe__content}>
			<article
				className={`${styles.aboutMe__titleBlock} ${styles.aboutMe__block}`}
			>
				<h1 className={styles.aboutMe__title}>About Me</h1>
			</article>

			<KnowledgeSidebar />

			<article
				className={`${styles.aboutMe__timeline} ${styles.aboutMe__block} ${styles.aboutMe__cards}`}
			>
				<h3>My Timeline</h3>
			</article>

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
