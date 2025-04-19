import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { ProfileIcon } from '@zlden/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../../image/logo_line.svg';
import { IconUI } from '../icon/index';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => (
	<header className={styles.header}>
		<nav className={`${styles.header__menu}`}>
			<div className={styles.menu_part_left}>
				<a href='#' className={styles.header__link}>
					Обо мне
				</a>
			</div>

			<div>
				<a href='#' className={styles.header__link}>
					Стек
				</a>
			</div>

			<div className={styles.menu_part_right}>
				<IconUI links={links} />
			</div>
		</nav>
	</header>
);
