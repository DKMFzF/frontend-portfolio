import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Header } from '../ui/Header';
import { expect } from '@jest/globals';

jest.mock(
	'../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

describe('[Header]', () => {
	it('renders header correctly and matches snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<Header />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
	});
});
