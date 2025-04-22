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

const CARD_WIDTH = 300;
const CARD_HEIGHT = 320;

const getRandom = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const checkCollision = (card1: Card, card2: Card) =>
	card1.x < card2.x + card2.width &&
	card1.x + card1.width > card2.x &&
	card1.y < card2.y + card2.height &&
	card1.y + card1.height > card2.y;

export const useCards = () => {
	const generateNonOverlappingCards = useCallback(() => {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const newCards: Card[] = [];
		const maxAttempts = 100;

		const baseCards = [...Array(8)].map((_, i) => ({
			id: i + 1,
			title: `Карточка ${i + 1}`,
			content: `Содержимое карточки ${i + 1}`,
			link: `#card${i + 1}`
		}));

		for (const baseCard of baseCards) {
			let placed = false;
			let attempts = 0;

			while (!placed && attempts < maxAttempts) {
				const x = getRandom(0, viewportWidth - CARD_WIDTH);
				const y = getRandom(0, viewportHeight - CARD_HEIGHT);

				const newCard: Card = {
					...baseCard,
					x,
					y,
					rotation: getRandom(-5, 5),
					width: CARD_WIDTH,
					height: CARD_HEIGHT
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

			if (!placed) {
				newCards.push({
					...baseCard,
					x: getRandom(0, viewportWidth - CARD_WIDTH),
					y: getRandom(0, viewportHeight - CARD_HEIGHT),
					rotation: getRandom(-5, 5),
					width: CARD_WIDTH,
					height: CARD_HEIGHT
				});
			}
		}

		return newCards;
	}, []);

	const [cards] = useState<Card[]>(() => generateNonOverlappingCards());

	return { cards, cardSize: { width: CARD_WIDTH, height: CARD_HEIGHT } };
};
