import { FC } from 'react';
import myImage from '@images/my-photo.jpg';
import styles from './about-me.module.scss';
import { CommonPage } from '@pages';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles.aboutMe}>
		<div className={styles.aboutMe__textContainer}>
			<h1 className={styles.aboutMe__title}>
				{'{'} Кто я? {'}'}
			</h1>
			<p className={styles.aboutMe__description}>
				Привет! Меня зовут Кирилл, я из Красноярска. Учусь на кафедре
				Программной инженерии СФУ на направлении Интеллектуальные
				системы управления. Влюблён в сложные алгоритмические задачи по
				программированию и Хакатоны!
			</p>
		</div>

		<div className={styles.aboutMe__imageContainer}>
			<img
				src={myImage}
				alt='human resume'
				className={styles.aboutMe__image}
			/>
		</div>

		<div className={styles.aboutMe__buttonContainer}>
			<button className={styles.aboutMe__button}>Скачать резюме</button>
		</div>
	</CommonPage>
);
