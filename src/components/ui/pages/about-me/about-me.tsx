import { FC } from 'react';
import myImage from '@images/my-photo.jpg';
import styles from './about-me.module.scss';
import { CommonPage } from '@pages';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles.aboutMe}>
		<div className={styles.aboutMe__content}>
			<article
				className={`${styles.aboutMe__titleBlock} ${styles.aboutMe__block}`}
			>
				<h1 className={styles.aboutMe__title}>About Me</h1>
			</article>

			<article
				className={`${styles.aboutMe__info1} ${styles.aboutMe__block}`}
			>
				<p className={styles.aboutMe__description}>
					Привет! Меня зовут Кирилл, я из Красноярска.
				</p>
			</article>

			<article
				className={`${styles.aboutMe__info2} ${styles.aboutMe__block}`}
			>
				<p className={styles.aboutMe__description}>
					Учусь на кафедре Программной инженерии СФУ.
				</p>
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

			{/* <div className={styles.aboutMe__imageContainer}>
        <img
          src={myImage}
          alt='human resume'
          className={styles.aboutMe__image}
        />
      </div> */}

			{/* <div className={styles.aboutMe__buttonContainer}>
        <button className={styles.aboutMe__button}>Скачать резюме</button>
      </div> */}
		</div>
	</CommonPage>
);
