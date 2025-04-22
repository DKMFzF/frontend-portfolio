import React from 'react';
import { useDragZoom, useCards } from '@hooks';
import styles from './portfolio.module.scss';
import { CardsProject } from '@components';

export const PortfolioPageUI: React.FC = () => {
	const { cards } = useCards();
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();

	return (
		<main
			ref={containerRef}
			className={styles.container}
			style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
			onMouseDown={handleMouseDown}
		>
			<CardsProject
				cards={cards}
				transformStyle={`translate(${position.x}px, ${position.y}px) scale(${scale})`}
			/>
		</main>
	);
};
