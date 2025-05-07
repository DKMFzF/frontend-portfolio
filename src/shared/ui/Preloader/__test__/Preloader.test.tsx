import { Preloader } from '../Preloader';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

describe('[Preloader]', () => {
	it('Renders preloader correctly and matches snapshot', () => {
		const { asFragment } = render(<Preloader />);
		expect(asFragment()).toMatchSnapshot();
	});
});
