import { FC } from 'react';
import { InteractiveBoardProps } from './type';
import styles from './InteractiveBoard.module.scss';

export const InteractiveBoard: FC<InteractiveBoardProps> = ({
	transformStyle,
	children
}) => (
	<div
		className={styles['interactive-board__wrapper']}
		style={{ transform: transformStyle }}
	>
		{children}
	</div>
);
