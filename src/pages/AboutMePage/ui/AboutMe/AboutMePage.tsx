import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import myImage from '@images/my-photo.jpg';

import styles from './AboutMePage.module.scss';
import { CommonPage } from '@ui';
import { AboutMeArticle } from '../AboutMeArticle';
import { ExperienceCard } from '../ExperienceCard';
import { KnowledgeSidebar } from '@features';
import { ExplodingText } from '../ExplodingText';

import { META_SITE_DATA } from '@config';

export const AboutMePage: FC = () => (
	<>
		<Helmet>
			<title>{META_SITE_DATA.titles.aboutMe}</title>
		</Helmet>
		<ExplodingText />
		<CommonPage pageStyles={styles['about-me']} isCentralPage>
			<section className={styles['about-me__content']}>
				<AboutMeArticle
					className={styles['about-me__title-container']}
					borderFlag
					borderRadiusFlag
					bgBlur
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
					bgBlur
				>
					<p className={styles['about-me__description']}>
						I am in love with complex algorithmic programming tasks
						and Hackathons!
					</p>
				</AboutMeArticle>
			</section>
		</CommonPage>
	</>
);

export default AboutMePage;
