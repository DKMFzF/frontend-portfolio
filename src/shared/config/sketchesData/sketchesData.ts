import animatedBackground from '@images/cardsSketchs/animatedBackground.png';
import flexibleSomething from '@images/cardsSketchs/flexibleSomething.png';
import brightSphere from '@images/cardsSketchs/brightSphere.png';
import iridescentStar from '@images/cardsSketchs/iridescentStar.png';
import curlySector from '@images/cardsSketchs/curlySector.png';
import myFirstProjectOnWebGl from '@images/cardsSketchs/myFirstProjectOnWebGl.png';
import testTexture from '@images/cardsSketchs/testTexture.png';
import testpbr from '@images/cardsSketchs/testpbr.png';
import threeText from '@images/cardsSketchs/threeText.png';
import testWebGPU from '@images/cardsSketchs/testWebGPU.png';
import apartments from '@images/cardsSketchs/apartments.png';
import musicShape from '@images/cardsSketchs/musicShape.png';

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
		id: 'sketch-13',
		screenshot: musicShape,
		title: 'Apartments',
		tags: ['webgl', 'threejs', 'glsl', 'noise map'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MusicShape/MusicShape.tsx'
	},
	// {
	// 	id: 'sketch-12',
	// 	screenshot: apartments,
	// 	title: 'Apartments',
	// 	tags: ['webgl', 'threejs', 'glsl'],
	// 	github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/Apartments/Apartments.tsx'
	// },
	{
		id: 'sketch-11',
		screenshot: apartments,
		title: 'Apartments',
		tags: ['webgl', 'threejs', 'glsl'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/Apartments/Apartments.tsx'
	},
	{
		id: 'sketch-10',
		screenshot: testWebGPU,
		title: 'Animated background (WGSL)',
		tags: ['webGPU', 'wgsl', 'experimental technology', 'chrome^+113'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/WebGPUTest/WebGPUTest.tsx'
	},
	{
		id: 'sketch-1',
		screenshot: animatedBackground,
		title: 'Animated background (GLSL)',
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
		screenshot: threeText,
		title: '3D Text',
		tags: ['three.js', 'text', 'random'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MyFirstProjectOnWebGl/MyFirstProjectOnWebGl.tsx'
	},
	{
		id: 'sketch-7',
		screenshot: testpbr,
		title: 'PBR Materials',
		tags: ['three.js', 'pbr', 'real render'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MyFirstProjectOnWebGl/MyFirstProjectOnWebGl.tsx'
	},
	{
		id: 'sketch-8',
		screenshot: testTexture,
		title: 'Test Textures',
		tags: ['three.js', 'mesh primitive', 'course Bruno Simon'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MyFirstProjectOnWebGl/MyFirstProjectOnWebGl.tsx'
	},
	{
		id: 'sketch-9',
		screenshot: myFirstProjectOnWebGl,
		title: 'My first project on WebGl',
		tags: ['three.js', 'mesh primitive', 'course Bruno Simon'],
		github: 'https://github.com/DKMFzF/dkmfzf.github.io/blob/main/src/pages/SketchDetailPage/ui/MyFirstProjectOnWebGl/MyFirstProjectOnWebGl.tsx'
	}
];
