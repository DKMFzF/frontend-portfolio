import { Helmet } from 'react-helmet-async';
import { FC } from 'react';
import { InteractiveBoard } from '../InteractiveBoard';
import { portfolioCard } from '../../constants/portfolioCard';
import { META_SITE_DATA } from '@config';
import { useDragZoom } from '../../model';
import { CardsList } from '../CardsList';
import styles from './Portfolio.module.scss';
import { CardPortfolio } from '../CardPortfolio';
import { TitleSection } from '../TitleSection';
import { ImgPortfolio } from '../ImgPortfolio';
import logoPortfolio from '@images/apple-touch-icon.png';

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
					<ImgPortfolio
						sourcImg={logoPortfolio}
						x={0}
						y={0}
						rotation={0}
					/>
					<TitleSection
						content='Current Projects'
						x={0}
						y={-1059}
						rotation={0}
						fontSize={250}
					/>
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
					<TitleSection
						content='No lib. Hard code.'
						x={-2000}
						y={-269}
						rotation={-22}
						fontSize={160}
					/>
					<TitleSection
						content='Coffee projects.'
						x={2000}
						y={-269}
						rotation={22}
						fontSize={160}
					/>
					<TitleSection
						content='Use Zoom!'
						x={-350}
						y={-150}
						rotation={-38}
						fontSize={60}
					/>
				</InteractiveBoard>
			</main>
		</>
	);
};

export default PortfolioPage;
