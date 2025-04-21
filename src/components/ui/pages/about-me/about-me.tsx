import { FC } from 'react';
import myImage from '@images/my-photo.jpg';

import styles from './about-me.module.scss';
import { CommonPage } from '@pages';
import { AboutMeArticle, ExperienceCard, KnowledgeSidebar } from '@components';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles.aboutMe}>
		<div className={styles.aboutMe__content}>
			<AboutMeArticle
				className={styles.aboutMe__titleContainer}
				borderRadiusFlag
			>
				<h1 className={styles.aboutMe__title}>About Me</h1>
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my tech skills'
				className={`${styles.aboutMe__stack} ${styles.aboutMe__cards}`}
				borderRadiusFlag
			>
				<KnowledgeSidebar />
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my timeline'
				className={`${styles.aboutMe__cards} ${styles.aboutMe__timeline}`}
				borderPrimaryColorFlag
				borderRadiusFlag
			>
				<ExperienceCard />
			</AboutMeArticle>

			<AboutMeArticle className={styles.aboutMe__imageUser} paddingFlag>
				<img
					src={myImage}
					alt='human user'
					className={styles.aboutMe__image}
				/>
			</AboutMeArticle>

			<AboutMeArticle className={styles.aboutMe__info4} borderRadiusFlag>
				<p className={styles.aboutMe__description}>
					I am in love with complex algorithmic programming tasks and
					Hackathons!
				</p>
			</AboutMeArticle>
		</div>
	</CommonPage>
);
