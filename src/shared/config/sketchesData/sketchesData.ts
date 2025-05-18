import animatedBackground from '@images/cardsSketchs/animatedBackground.png';
import flexibleSomething from '@images/cardsSketchs/flexibleSomething.png';
import brightSphere from '@images/cardsSketchs/brightSphere.png';
import iridescentStar from '@images/cardsSketchs/iridescentStar.png';
import curlySector from '@images/cardsSketchs/curlySector.png';

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
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	},
	{
		id: 'sketch-2',
		screenshot: flexibleSomething,
		title: 'Flexible something?',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	},
	{
		id: 'sketch-3',
		screenshot: brightSphere,
		title: 'Bright sphere',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	},
	{
		id: 'sketch-4',
		screenshot: iridescentStar,
		title: 'Bright sphere',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	},
	{
		id: 'sketch-5',
		screenshot: curlySector,
		title: 'Curly Sector',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	}
];
