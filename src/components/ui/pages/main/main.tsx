import { FC } from 'react';
import { TMainpageProps } from './type';
import styles from './main.module.scss';
import { SectionAboutMeUI } from '../../section-about-me';

export const MainPageUI: FC<TMainpageProps> = () => (
	<main className={styles.containerMain}>
		<SectionAboutMeUI />
	</main>
);
