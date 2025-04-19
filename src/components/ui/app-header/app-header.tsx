import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { ProfileIcon } from '@zlden/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../../../image/logo_line.svg';
import React from 'react';

/**
 * Упрощенный компонент шапки приложения
 * Содержит только две ссылки по краям:
 * - Слева: Оформление заказа
 * - Справа: Личный кабинет
 */
export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => {
	const location = useLocation();

	const isActiveLink = (path: string, exact = false) =>
		exact ? location.pathname === path : location.pathname.startsWith(path);

	return <header />;
};
