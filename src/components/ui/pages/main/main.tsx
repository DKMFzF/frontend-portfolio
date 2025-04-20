import { FC } from 'react';
import { TMainpageProps } from './type';
import styles from './main.module.scss';
import { SectionAboutMe } from '../../../section-about-me';

export const MainPageUI: FC<TMainpageProps> = () => (
	<main className={styles.containerMain}>
		<SectionAboutMe />
	</main>
);
