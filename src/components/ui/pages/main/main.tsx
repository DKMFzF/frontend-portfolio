import { FC } from 'react';
import { TMainpageProps } from './type';
import styles from './main.module.scss';
// import { SectionAboutMe } from '../../../section-about-me';

export const MainPageUI: FC<TMainpageProps> = ({ children }) => (
	<main className={styles.containerMain}>{children}</main>
);

// <SectionAboutMe />
