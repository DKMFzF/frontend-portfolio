import { defineConfig } from 'cypress';
import 'dotenv/config';

if (!process.env.CYPRESS_baseUrl)
	throw new Error('CYPRESS_baseUrl is not defined in .env file');

export default defineConfig({
	projectId: '1f6ci7',
	e2e: {
		setupNodeEvents(on, config) {
			return config;
		},
		baseUrl: process.env.CYPRESS_baseUrl,
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'cypress/support/e2e.ts'
	}
});
