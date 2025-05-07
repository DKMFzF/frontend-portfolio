export interface Card {
	id: number;
	title: string;
	content: string;
	link: string;
	x: number;
	y: number;
	rotation: number;
}

export interface CardsProjectProps {
	cards: Card[];
	transformStyle: string;
}
