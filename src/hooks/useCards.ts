import { useCallback, useState } from 'react';

export interface Card {
	id: number;
	title: string;
	content: string;
	link: string;
	x: number;
	y: number;
	rotation: number;
	width: number;
	height: number;
}

const DEFAULT_CARD_WIDTH = 200;
const DEFAULT_CARD_HEIGHT = 200;
const PADDING_BETWEEN_CARDS = 100;

const getRandom = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const checkCollision = (card1: Card, card2: Card) =>
	card1.x < card2.x + card2.width + PADDING_BETWEEN_CARDS &&
	card1.x + card1.width + PADDING_BETWEEN_CARDS > card2.x &&
	card1.y < card2.y + card2.height + PADDING_BETWEEN_CARDS &&
	card1.y + card1.height + PADDING_BETWEEN_CARDS > card2.y;

export const useCards = () => {
	const generateNonOverlappingCards = useCallback(() => {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const newCards: Card[] = [];
		const maxAttempts = 5000;

		const baseCards = [...Array(10)].map((_, i) => ({
			id: i + 1,
			title: `Карточка ${i + 1}`,
			content: `Содержимое карточки ${i + 1}`,
			link: `#card${i + 1}`,
			width: DEFAULT_CARD_WIDTH + getRandom(-50, 50),
			height: DEFAULT_CARD_HEIGHT + getRandom(-50, 50)
		}));

		for (const baseCard of baseCards) {
			let placed = false;
			let attempts = 0;

			while (!placed && attempts < maxAttempts) {
				const x = getRandom(0, viewportWidth - baseCard.width);
				const y = getRandom(0, viewportHeight - baseCard.height);

				const newCard: Card = {
					...baseCard,
					x,
					y,
					rotation: getRandom(-5, 5)
				};

				const hasCollision = newCards.some((existingCard) =>
					checkCollision(newCard, existingCard)
				);

				if (!hasCollision) {
					newCards.push(newCard);
					placed = true;
				}

				attempts++;
			}
		}

		return newCards;
	}, []);

	const [cards] = useState<Card[]>(() => generateNonOverlappingCards());

	return { cards };
};
