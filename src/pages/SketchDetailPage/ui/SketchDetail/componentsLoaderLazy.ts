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
			/* webpackChunkName: "test-material" */ import(
				'../ThreeJsText/ThreeJsText'
			)
	),
	'sketch-7': lazy(
		() =>
			/* webpackChunkName: "test-material" */ import(
				'../TestMaterials/TestMaterials'
			)
	),
	'sketch-8': lazy(
		() =>
			/* webpackChunkName: "test-texture" */ import(
				'../TestTexture/TestTexture'
			)
	),
	'sketch-9': lazy(
		() =>
			/* webpackChunkName: "my-first-project-on-webgl" */ import(
				'../MyFirstProjectOnWebGl/MyFirstProjectOnWebGl'
			)
	),
	'sketch-10': lazy(
		() =>
			/* webpackChunkName: "test-wgsl" */ import(
				'../WebGPUTest/WebGPUTest'
			)
	),
	'sketch-11': lazy(
		() =>
			/* webpackChunkName: "apartments" */ import(
				'../Apartments/Apartments'
			)
	),
	'sketch-12': lazy(
		() =>
			/* webpackChunkName: "apartments" */ import('../SlideImg/SlideImg')
	),
	'sketch-13': lazy(
		() =>
			/* webpackChunkName: "music-shape" */ import(
				'../MusicShape/MusicShape'
			)
	),
	'sketch-14': lazy(
		() =>
			/* webpackChunkName: "plastic-sphere" */ import(
				'../PlasticSphere/PlasticSphere'
			)
	)
};
