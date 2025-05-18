import zaglushka from '@images/zaglushka.png';
import animatedBackground from '@images/cardsSketchs/animatedBackground.png';
import flexibleSomething from '@images/cardsSketchs/flexibleSomething.png';

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
		screenshot: zaglushka,
		title: 'Bright sphere',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	}
];
