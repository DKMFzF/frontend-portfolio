import animatedBackground from '@images/cardsSketchs/animatedBackground.png';
import flexibleSomething from '@images/cardsSketchs/flexibleSomething.png';
import brightSphere from '@images/cardsSketchs/brightSphere.png';
import iridescentStar from '@images/cardsSketchs/iridescentStar.png';
import curlySector from '@images/cardsSketchs/curlySector.png';
import myFirstProjectOnWebGl from '@images/cardsSketchs/myFirstProjectOnWebGl.png';

import { routesData } from '../routesData';

type SketchesDataType = {
	id: routesData;
	screenshot: string;
	title: string;
	tags: string[];
	github: string;
};

export const sketchesData: SketchesDataType[] = [
	{
		id: 'sketch-1',
		screenshot: animatedBackground,
		title: 'Animated background',
		tags: ['three.js', 'glsl'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/AnimatedBackground/AnimatedBackground.tsx'
	},
	{
		id: 'sketch-2',
		screenshot: flexibleSomething,
		title: 'Flexible something?',
		tags: ['three.js', 'glsl'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/FlexibleSomething/FlexibleSomething.tsx'
	},
	{
		id: 'sketch-3',
		screenshot: brightSphere,
		title: 'Bright sphere',
		tags: ['three.js', 'glsl', 'mesh primitive'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/BrightSphere/BrightSphere.tsx'
	},
	{
		id: 'sketch-4',
		screenshot: iridescentStar,
		title: 'Bright sphere',
		tags: ['webgl', 'three.js', 'glsl'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/IridescentStar/IridescentStar.tsx'
	},
	{
		id: 'sketch-5',
		screenshot: curlySector,
		title: 'Curly Sector',
		tags: ['three.js', 'mesh primitive', 'scroll', 'course Bruno Simon'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/CurlySector/CurlySector.tsx'
	},
	{
		id: 'sketch-6',
		screenshot: myFirstProjectOnWebGl,
		title: 'My first project on WebGl',
		tags: ['three.js', 'mesh primitive', 'course Bruno Simon'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MyFirstProjectOnWebGl/MyFirstProjectOnWebGl.tsx'
	}
];
