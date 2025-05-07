import { CommonPage } from '../common';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';

describe('[CommonPage]', () => {
	it('Renders common-page correctly and matches snapshot', () => {
		const { asFragment } = render(
			<CommonPage pageStyles='styles'>
				<div>test</div>
			</CommonPage>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
