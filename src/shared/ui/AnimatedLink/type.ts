import { type routesData } from '@config';
import { ReactNode, MouseEvent } from 'react';

type AnimatedNavLinkProps = {
	to: routesData;
	styles?: string;
	children?: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default AnimatedNavLinkProps;
