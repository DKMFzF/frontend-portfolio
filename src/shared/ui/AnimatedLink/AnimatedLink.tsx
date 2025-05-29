import { FC, MouseEvent } from 'react';
import { useAnimatedNavigate } from '@lib';
import { useLocation } from 'react-router-dom';
import type AnimatedNavLinkProps from './type';

export const AnimatedNavLink: FC<AnimatedNavLinkProps> = ({
	to = '/',
	styles = '',
	children = '',
	onClick
}) => {
	const location = useLocation();
	const animatedNavigate = useAnimatedNavigate();

	// added local component onClick
	const handleClick = (event: MouseEvent<HTMLDivElement>) => {
		if (document.pointerLockElement) document.exitPointerLock();
		if (onClick) onClick(event);
		if (!event.defaultPrevented && location.pathname !== to)
			animatedNavigate(to);
	};

	return (
		<div
			className={styles}
			onClick={handleClick}
			style={{
				cursor: 'pointer'
			}}
		>
			{children}
		</div>
	);
};
