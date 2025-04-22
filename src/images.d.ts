declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement>
	>;
	const src: string;
	export default src;
}

declare module '*.png';

declare module '*.jpg';

declare module '*.json';

declare module '*.pdf' {
	const value: string;
	export default value;
}
