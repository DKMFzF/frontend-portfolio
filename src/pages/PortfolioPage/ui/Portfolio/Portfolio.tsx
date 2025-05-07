import { Helmet } from 'react-helmet-async';
import { FC, useState, useEffect } from 'react';
import { CardsProject } from '../CardsProject';
import { portfolioCard } from '../../constants/portfolioCard';
import { META_SITE_DATA } from '@config';
import { useCards, useDragZoom } from '../../model';
import styles from './portfolio.module.scss';

export const PortfolioPage: FC = () => {
	const [isMobileView, setIsMobileView] = useState(false);
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();
	const { cards: positionedCards } = useCards();

	useEffect(() => {
		const handleResize = () => {
			setIsMobileView(window.innerWidth < 1440);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

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

	if (isMobileView) {
		return (
			<>
				<Helmet>
					<title>
						{
							META_SITE_DATA.titles.portfolio
								.portfolioWithNotApproval
						}
					</title>
				</Helmet>
				<main className={styles['mobile-message']} data-cy='content'>
					Please open this page from your PC
				</main>
			</>
		);
	}

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
				style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
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
