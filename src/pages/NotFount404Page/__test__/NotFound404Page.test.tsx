import { HelmetProvider } from 'react-helmet-async';
import { expect } from '@jest/globals';
import { NotFound404Page } from '../ui/NotFount404';
import { render } from '@testing-library/react';

describe('[NotFound404]', () => {
	it('Renders not-found-404 correctly and matches snapshot', () => {
		const { asFragment } = render(
			<HelmetProvider>
				<NotFound404Page />
			</HelmetProvider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
