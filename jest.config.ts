import type { Config } from 'jest';

const config: Config = {
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: [
		'js',
		'mjs',
		'cjs',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	moduleNameMapper: {
		'\\.(css|scss|sass)$': 'identity-obj-proxy',

		// App
		'^@providers(.*)$': '<rootDir>/src/app/providers$1',
		'^@layouts(.*)$': '<rootDir>/src/app/layouts$1',

		// Pages, widgets, features
		'^@pages(.*)$': '<rootDir>/src/pages$1',
		'^@widgets(.*)$': '<rootDir>/src/widgets$1',
		'^@features(.*)$': '<rootDir>/src/features$1',

		// Shared
		'^@meta(.*)$': '<rootDir>/src/shared/meta$1',
		'^@lib(.*)$': '<rootDir>/src/shared/lib$1',
		'^@styles(.*)$': '<rootDir>/src/shared/styles$1',
		'^@ui(.*)$': '<rootDir>/src/shared/ui$1',
		'^@config(.*)$': '<rootDir>/src/shared/config$1',
		'^@fonts(.*)$': '<rootDir>/src/shared/assets/fonts$1',
		'^@images(.*)$': '<rootDir>/src/shared/assets/images$1'
	},
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>jest.setup.ts'],
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['']
	},
	transform: {
		'^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
		'^.+\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-stub'
	}
};

export default config;
