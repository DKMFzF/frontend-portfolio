import zaglushka from '@images/zaglushka.png';
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
		screenshot: zaglushka,
		title: 'Animated background',
		tags: ['react', 'webgl', 'three.js'],
		github: ''
	},
	{
		id: 'sketch-2',
		screenshot: zaglushka,
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
