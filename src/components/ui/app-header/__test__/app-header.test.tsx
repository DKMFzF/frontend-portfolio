import { expect, it, jest } from '@jest/globals';
import { AppHeaderUI } from '../app-header';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock(
	'../../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

describe('[AppHeaderUI]: test render', () => {
	it('Renders header correctly and matches snapshot', () => {
		const { asFragment } = render(
			<MemoryRouter>
				<AppHeaderUI
					links={{
						github: '',
						email: '',
						telegram: ''
					}}
				/>
			</MemoryRouter>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
