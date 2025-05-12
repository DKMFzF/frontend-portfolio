export type TPositionBoard = {
	x: number;
	y: number;
	rotation: number;
};

export type TPortfolioCard = {
	logo: string;
	title?: string;
	link: string;
	settingsView: TPositionBoard & {
		bgColor: string;
	};
};
