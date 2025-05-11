export interface Card {
	id: number;
	logo: string;
	title: string;
	link: string;
	settingsView: {
		x: number;
		y: number;
		rotation: number;
		bgColor: string;
	};
}

export interface InteractiveBoardProps {
	cards: Card[];
	transformStyle: string;
}
