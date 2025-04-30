import { FC } from 'react';
import myImage from '@images/my-photo.jpg';

import styles from './about-me.module.scss';
import { CommonPage } from '@pages';
import { AboutMeArticle, ExperienceCard, KnowledgeSidebar } from '@components';

export const AboutMePageUI: FC = () => (
	<CommonPage pageStyles={styles['about-me']}>
		<div className={styles['about-me__content']}>
			<AboutMeArticle
				className={styles['about-me__title-container']}
				borderFlag
				borderRadiusFlag
			>
				<h1 className={styles['about-me__title']}>About Me</h1>
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my tech skills'
				className={`${styles['about-me__stack']} ${styles['about-me__cards']}`}
				borderFlag
				borderRadiusFlag
				flexFlag
			>
				<KnowledgeSidebar />
			</AboutMeArticle>

			<AboutMeArticle
				subtitle='my timeline'
				className={`${styles['about-me__cards']} ${styles['about-me__timeline']}`}
				borderFlag
				borderPrimaryColorFlag
				borderRadiusFlag
				flexFlag
			>
				<ExperienceCard />
			</AboutMeArticle>

			<AboutMeArticle
				className={styles['about-me__image-dkmfzf']}
				paddingFlag
			>
				<div className={styles['about-me__image-wrapper']}>
					<img
						src={myImage}
						alt='human user'
						className={styles['about-me__image']}
					/>
				</div>
			</AboutMeArticle>

			<AboutMeArticle
				className={styles['about-me__discriptrion-dkmfzf']}
				borderFlag
				borderRadiusFlag
			>
				<p className={styles['about-me__description']}>
					I am in love with complex algorithmic programming tasks and
					Hackathons!
				</p>
			</AboutMeArticle>
		</div>
	</CommonPage>
);
