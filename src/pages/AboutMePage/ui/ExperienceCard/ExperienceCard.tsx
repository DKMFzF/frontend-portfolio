import { FC } from 'react';
import styles from './ExperienceCard.module.scss';

export const ExperienceCard: FC = () => (
	<div className={styles['experience-card']}>
		<div className={styles['experience-card__experience-container']}>
			<span className={styles['experience-card__number']}>2</span>
			<span className={styles['experience-card__years-label']}>
				years
			</span>
		</div>
		<div className={styles['experience-card__container-footer']}>
			<p className={styles['experience-card__description']}>
				I am immersed in the IT community, participate in hackathons,
				take courses and study at the SFU Institute
			</p>
			<div className={styles['experience-card__timeline-arrow']}>
				{'>'}
			</div>
		</div>
	</div>
);
