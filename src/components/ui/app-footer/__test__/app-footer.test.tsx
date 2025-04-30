import { render, getByTestId } from '@testing-library/react';
import {
	describe,
	test,
	expect,
	beforeEach,
	afterEach,
	jest
} from '@jest/globals';
import { AppFooterUI } from '../app-footer';

describe('[AppFooterUI]: render footer and years test', () => {
	beforeEach(() => {
		jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2025);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('Renders footer correctly and matches snapshot', () => {
		const { asFragment } = render(<AppFooterUI />);
		expect(asFragment()).toMatchSnapshot();
	});

	test('Displays current year correctly', () => {
		const { container } = render(<AppFooterUI />);
		const yearToDayText = getByTestId(container, 'years');

		expect(yearToDayText.textContent).toBe('© 2025 DKMFZF PORTFOLIO');
	});
});
