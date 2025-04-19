import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { IconUI } from '../icon/index';
import { LinkUI } from '../link';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => (
	<header className={styles.header}>
		<nav className={styles.header__menu}>
			<LinkUI text='Обо мне' link='#' />
			<LinkUI text='Стек' link='#' />
			<LinkUI text='Портфолио' link='#' />
			<div className={styles.menu_part_right}>
				<IconUI links={links} />
			</div>
		</nav>
	</header>
);
