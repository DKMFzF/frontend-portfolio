import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import myImage from '@images/my-photo.jpg';

import styles from './AboutMePage.module.scss';
import { CommonPage } from '@ui';
import { AboutMeArticle } from '../AboutMeArticle';
import { ExperienceCard } from '../ExperienceCard';
import { KnowledgeSidebar } from '@features';

import { META_SITE_DATA } from '@config';

export const AboutMePage: FC = () => (
	<>
		<Helmet>
			<title>{META_SITE_DATA.titles.aboutMe}</title>
		</Helmet>
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
						I am in love with complex algorithmic programming tasks
						and Hackathons!
					</p>
				</AboutMeArticle>
			</div>
		</CommonPage>
	</>
);

export default AboutMePage;
