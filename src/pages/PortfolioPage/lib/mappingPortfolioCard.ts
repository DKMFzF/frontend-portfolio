import { TPortfolioCard } from '../constants/type';
import { CardPortfolioProps } from '../ui/CardPortfolio/type';

export const mappingPortfolioCard = (
	originalCard: TPortfolioCard
): CardPortfolioProps => ({
	...originalCard
});
