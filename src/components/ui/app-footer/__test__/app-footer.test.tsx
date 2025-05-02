import { describe, it, beforeEach, afterEach, jest } from '@jest/globals';
import { testRenderComponent, testCurrentText } from '@utils-testing';
import { AppFooterUI } from '../app-footer';

describe('[AppFooterUI]', () => {
	beforeEach(() => {
		jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2025);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Renders footer correctly and matches snapshot', () =>
		testRenderComponent(<AppFooterUI />));

	it('Displays current year correctly', () =>
		testCurrentText(<AppFooterUI />, 'years', '© 2025 DKMFZF PORTFOLIO'));
});
