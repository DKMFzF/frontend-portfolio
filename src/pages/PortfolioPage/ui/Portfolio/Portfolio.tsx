import { Helmet } from 'react-helmet-async';
import { FC, useState, useEffect } from 'react';
import { CardsProject } from '../CardsProject';
import {
	portfolioCard,
	portfolioCardPositions
} from '../../constants/portfolioCard';
import { META_SITE_DATA } from '@config';
import { useDragZoom } from '../../model';
import styles from './Portfolio.module.scss';

export const PortfolioPage: FC = () => {
	const [isMobileView, setIsMobileView] = useState(false);
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1440);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const cardsWithPosition = portfolioCard.map((originalCard, index) => {
		const positionData = portfolioCardPositions[index];

		return {
			...originalCard,
			id: index,
			x: positionData.x,
			y: positionData.y,
			rotation: positionData.rotation
		};
	});

	return (
		<>
			<Helmet>
				<title>
					{META_SITE_DATA.titles.portfolio.portfolioWithApproval}
				</title>
			</Helmet>
			<main
				ref={containerRef}
				className={styles.container}
				style={{
					cursor: isDragging ? 'grabbing' : 'grab',
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					overflow: 'hidden',
					touchAction: 'none'
				}}
				onMouseDown={handleMouseDown}
			>
				<CardsProject
					cards={cardsWithPosition}
					transformStyle={`translate(${position.x}px, ${position.y}px) scale(${scale})`}
				/>
			</main>
		</>
	);
};

export default PortfolioPage;
