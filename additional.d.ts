declare module '*.svg' {
	import * as React from 'react';
	export const ReactComponent: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string }
	>;
	const src: string;
	export default src;
}

declare module '*.png' {
	const src: string;
	export default src;
}

declare module '*.jpg' {
	const src: string;
	export default src;
}

declare module '*.jpeg' {
	const src: string;
	export default src;
}

declare module '*.gif' {
	const src: string;
	export default src;
}

declare module '*.bmp' {
	const src: string;
	export default src;
}

declare module '*.tiff' {
	const src: string;
	export default src;
}

declare module '*.webp' {
	const src: string;
	export default src;
}

declare module '*.ico' {
	const src: string;
	export default src;
}

declare module '*.pdf' {
	const src: string;
	export default src;
}

declare module '*.md' {
	const src: string;
	export default src;
}

declare module '*.json' {
	const value: any;
	export default value;
}

declare module '*.mp4' {
	const src: string;
	export default src;
}

declare module '*.webm' {
	const src: string;
	export default src;
}

declare module '*.ogg' {
	const src: string;
	export default src;
}

declare module '*.mp3' {
	const src: string;
	export default src;
}

declare module '*.wav' {
	const src: string;
	export default src;
}

declare module '*.flac' {
	const src: string;
	export default src;
}

declare module '*.aac' {
	const src: string;
	export default src;
}

declare module '*.woff' {
	const src: string;
	export default src;
}

declare module '*.woff2' {
	const src: string;
	export default src;
}

declare module '*.eot' {
	const src: string;
	export default src;
}

declare module '*.ttf' {
	const src: string;
	export default src;
}

declare module '*.otf' {
	const src: string;
	export default src;
}

type CSSModuleClasses = { readonly [key: string]: string };

declare module '*.module.css' {
	const classes: CSSModuleClasses;
	export default classes;
}

declare module '*.module.scss' {
	const classes: CSSModuleClasses;
	export default classes;
}

declare module '*.module.sass' {
	const classes: CSSModuleClasses;
	export default classes;
}

declare module '*.css' {
	const content: CSSModuleClasses;
	export default content;
}

declare module '*.scss' {
	const content: CSSModuleClasses;
	export default content;
}

declare module '*.sass' {
	const content: CSSModuleClasses;
	export default content;
}

declare module '*.glsl' {
	const content: string;
	export default content;
}

declare module '*.vert' {
	const content: string;
	export default content;
}

declare module '*.frag' {
	const content: string;
	export default content;
}

declare module '*.exr' {
	const content: string;
	export default content;
}
