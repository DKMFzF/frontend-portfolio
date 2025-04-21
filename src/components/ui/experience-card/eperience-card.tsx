import { FC } from 'react';
import styles from './eperience-card.module.scss';

// TODO: вынести общии стили в компонент about-me-article

export const ExperienceCardUI: FC = () => (
	<div className={styles.experienceCard}>
		<div className={styles.experienceCard__experienceContainer}>
			<span className={styles.experienceCard__number}>2</span>
			<span className={styles.experienceCard__yearsLabel}>years</span>
		</div>
		<div className={styles.experienceCard__containerFooter}>
			<p className={styles.experienceCard__description}>
				I am immersed in the IT community, participate in hackathons,
				take courses and study at the SFU Institute
			</p>
			<div className={styles.experienceCard__timelineArrow}>-{'>'}</div>
		</div>
	</div>
);
