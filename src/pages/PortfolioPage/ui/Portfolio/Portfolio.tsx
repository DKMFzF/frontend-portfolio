import { Helmet } from 'react-helmet-async';
import { FC } from 'react';
import { InteractiveBoard } from '../InteractiveBoard';
import { portfolioCard } from '../../constants/portfolioCard';
import { META_SITE_DATA } from '@config';
import { useDragZoom } from '../../model';
import { CardsList } from '../CardsList';
import styles from './Portfolio.module.scss';
import { CardPortfolio } from '../CardPortfolio';

export const PortfolioPage: FC = () => {
	const { isDragging, position, scale, handleMouseDown, containerRef } =
		useDragZoom();

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
					transformStyle={`translate(${position.x}px, ${position.y}px) scale(${scale})`}
				>
					<CardsList>
						{portfolioCard.map((card, index) => (
							<CardPortfolio
								key={index}
								logo={card.logo}
								link={card.link}
								title={card.title}
								settingsView={card.settingsView}
							/>
						))}
					</CardsList>
				</InteractiveBoard>
			</main>
		</>
	);
};

export default PortfolioPage;
