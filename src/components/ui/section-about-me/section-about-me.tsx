import { FC } from 'react';
import styles from './section-about-me.module.scss';
import myImage from '@images/my-photo.jpg';

export const SectionAboutMeUI: FC = () => (
	<section id='SectionAboutMe' className={styles.aboutMe}>
		<div className={styles.textBlock}>
			<h2 className={styles.title}>Обо мне</h2>
			<p className={styles.description}>
				Привет! Меня зовут Кирилл, я из Красноярска. Учусь на кафедре
				Программной инженерии СФУ на направлении Интеллектуальные
				системы управления. Влюблён в сложные алгоритмические задачи по
				программированию и Хакатоны!
			</p>
		</div>

		<div className={styles.imageBlock}>
			<img src={myImage} alt='human resume' className={styles.image} />
		</div>

		<div className={styles.buttonBlock}>
			<button className={styles.button}>Скачать резюме</button>
		</div>
	</section>
);
