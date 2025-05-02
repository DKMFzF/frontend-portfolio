import { defineConfig } from 'cypress';
import 'dotenv/config';

export default defineConfig({
	projectId: '1f6ci7',
	e2e: {
		setupNodeEvents(on, config) {
			return config;
		},
		baseUrl: process.env.CYPRESS_baseUrl || 'http://localhost:8081',
		specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'cypress/support/e2e.ts'
	}
});
