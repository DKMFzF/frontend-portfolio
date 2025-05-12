import { FC } from 'react';
import { InteractiveBoardProps } from './type';
import commonPortfolioStyles from '../../styles/CommonPortfolio.module.scss';
import styles from './InteractiveBoard.module.scss';

export const InteractiveBoard: FC<InteractiveBoardProps> = ({
	transformStyle,
	children
}) => (
	<div
		className={`${commonPortfolioStyles['common-portfolio']} ${styles['interactive-board__wrapper']}`}
		style={{ transform: transformStyle }}
	>
		{children}
	</div>
);
