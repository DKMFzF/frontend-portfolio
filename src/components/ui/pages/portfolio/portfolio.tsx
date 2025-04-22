import React from 'react';
import { useDragZoom } from '@hooks';
import styles from './portfolio.module.scss';
import { CardsProject } from '@components';
import { portfolioCard } from '@utils-constants';
import { useCards } from '@hooks';

export const PortfolioPageUI: React.FC = () => {
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();

	const { cards: positionedCards } = useCards();

	const cardsWithPosition = portfolioCard.map((originalCard, index) => {
		const positionData =
			positionedCards[Math.min(index, positionedCards.length - 1)];

		return {
			...originalCard,
			id: index,
			x: positionData.x,
			y: positionData.y,
			rotation: positionData.rotation,
			width: positionData.width,
			height: positionData.height
		};
	});

	return (
		<main
			ref={containerRef}
			className={styles.container}
			style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
			onMouseDown={handleMouseDown}
		>
			<CardsProject
				cards={cardsWithPosition}
				transformStyle={`translate(${position.x}px, ${position.y}px) scale(${scale})`}
			/>
		</main>
	);
};
