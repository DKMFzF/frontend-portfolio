import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { LinkCUS, Icon } from '@components';
import { Link } from 'react-router-dom';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => (
	<header className={styles.header}>
		<nav className={styles.header__menu}>
			<Link to='/'>
				<LinkCUS text='Обо мне' link='#' />
			</Link>
			<Link to='/stack'>
				<LinkCUS text='Стек' link='#' />
			</Link>
			<Link to='/portfolio'>
				<LinkCUS text='Портфолио' link='#' />
			</Link>
			<div className={styles.menu_part_right}>
				<Icon links={links} />
			</div>
		</nav>
	</header>
);
