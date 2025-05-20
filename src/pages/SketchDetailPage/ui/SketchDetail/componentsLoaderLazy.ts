import { lazy } from 'react';

export const SketchComponents = {
	'sketch-1': lazy(
		() =>
			/* webpackChunkName: "animated-background" */ import(
				'../AnimatedBackground/AnimatedBackground'
			)
	),
	'sketch-2': lazy(
		() =>
			/* webpackChunkName: "flexible-something" */ import(
				'../FlexibleSomething/FlexibleSomething'
			)
	),
	'sketch-3': lazy(
		() =>
			/* webpackChunkName: "bright-sphere" */ import(
				'../BrightSphere/BrightSphere'
			)
	),
	'sketch-4': lazy(
		() =>
			/* webpackChunkName: "iridescent-star" */ import(
				'../IridescentStar/IridescentStar'
			)
	),
	'sketch-5': lazy(
		() =>
			/* webpackChunkName: "curly-sector" */ import(
				'../CurlySector/CurlySector'
			)
	),
	'sketch-6': lazy(
		() =>
			/* webpackChunkName: "my-first-project-on-webgl" */ import(
				'../MyFirstProjectOnWebGl/MyFirstProjectOnWebGl'
			)
	)
};
