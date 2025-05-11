import { TPortfolioCard } from '../constants/type';
import { Card } from '../ui/InteractiveBoard/type';

export const mappingPortfolioCard = (
	originalCard: TPortfolioCard,
	index: number
): Card => ({
	id: index,
	...originalCard
});
