import { Helmet } from 'react-helmet-async';
import { FC } from 'react';
import { InteractiveBoard } from '../InteractiveBoard';
import { portfolioCard } from '../../constants/portfolioCard';
import { META_SITE_DATA } from '@config';
import { useDragZoom } from '../../model';
import { mappingPortfolioCard } from '../../lib/mappingPortfolioCard';
import styles from './Portfolio.module.scss';

export const PortfolioPage: FC = () => {
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();

	const cardsWithPosition = portfolioCard.map((originalCard, index) =>
		mappingPortfolioCard(originalCard, index)
	);

	return (
		<>
			<Helmet>
				<title>
					{META_SITE_DATA.titles.portfolio.portfolioWithApproval}
				</title>
			</Helmet>
			<main
				ref={containerRef}
				className={styles['portfolio-content']}
				style={{
					cursor: isDragging ? 'grabbing' : 'grab',
					touchAction: 'none'
				}}
				onMouseDown={handleMouseDown}
			>
				<InteractiveBoard
					cards={cardsWithPosition}
					transformStyle={`translate(${position.x}px, ${position.y}px) scale(${scale})`}
				/>
			</main>
		</>
	);
};

export default PortfolioPage;
