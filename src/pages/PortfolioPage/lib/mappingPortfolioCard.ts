import { type TPortfolioCard } from '../model';
import { CardPortfolioProps } from '../ui/CardPortfolio/type';

export const mappingPortfolioCard = (
	originalCard: TPortfolioCard
): CardPortfolioProps => ({
	...originalCard
});
