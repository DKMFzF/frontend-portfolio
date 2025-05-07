import { describe, it, beforeEach, afterEach, jest } from '@jest/globals';
import { Footer } from '../ui/Footer';
import { expect } from '@jest/globals';
import { getByTestId, render } from '@testing-library/react';

describe('[Footer]', () => {
	beforeEach(() => {
		jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2025);
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('Renders footer correctly and matches snapshot', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
	});

	it('Displays current year correctly', () => {
		const { container } = render(<Footer />);
		const yearElement = getByTestId(container, 'years');
		expect(yearElement.textContent).toBe('© 2025 DKMFZF PORTFOLIO');
	});
});
