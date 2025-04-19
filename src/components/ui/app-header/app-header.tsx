import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { Link, Icon } from '@components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => (
	<header className={styles.header}>
		<nav className={styles.header__menu}>
			<Link text='Обо мне' link='#' />
			<Link text='Стек' link='#' />
			<Link text='Портфолио' link='#' />
			<div className={styles.menu_part_right}>
				<Icon links={links} />
			</div>
		</nav>
	</header>
);
