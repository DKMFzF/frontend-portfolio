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
		'^@components(.*)$': '<rootDir>/src/components$1',
		'^@hooks(.*)$': '<rootDir>/src/hooks$1',
		'^@images/(.*)$': '<rootDir>/src/image/$1',
		'^@pages$': '<rootDir>/src/pages',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@utils-constants$': '<rootDir>/src/utils/constants.ts',
		'^@utils-testing$': '<rootDir>/src/utils/testing-helpers/$1',
		'^@ui/(.*)$': '<rootDir>/src/components/ui/$1'
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
