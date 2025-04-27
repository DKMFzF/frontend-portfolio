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
				borderFlag
				borderRadiusFlag
			>
				<h1 className={styles.aboutMe__title}>About Me</h1>
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my tech skills'
				className={`${styles.aboutMe__stack} ${styles.aboutMe__cards}`}
				borderFlag
				borderRadiusFlag
			>
				<KnowledgeSidebar />
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my timeline'
				className={`${styles.aboutMe__cards} ${styles.aboutMe__timeline}`}
				borderFlag
				borderPrimaryColorFlag
				borderRadiusFlag
			>
				<ExperienceCard />
			</AboutMeArticle>

			<AboutMeArticle className={styles.aboutMe__imageUser} paddingFlag>
				<div className={styles.aboutMe__imageWrapper}>
					<img
						src={myImage}
						alt='human user'
						className={styles.aboutMe__image}
					/>
				</div>
			</AboutMeArticle>

			<AboutMeArticle
				className={styles.aboutMe__discriptrionDkmfzf}
				borderFlag
				borderRadiusFlag
			>
				<p className={styles.aboutMe__description}>
					I am in love with complex algorithmic programming tasks and
					Hackathons!
				</p>
			</AboutMeArticle>
		</div>
	</CommonPage>
);
