export type CodeSnippetProps = {
	text: string;
	position: [number, number, number];
	onComplete?: () => void;
};
