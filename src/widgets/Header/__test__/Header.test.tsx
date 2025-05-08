import { Link, MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Header } from '../ui/Header';
import { SocialLinks } from '@providers';
import { expect } from '@jest/globals';

jest.mock(
	'../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

jest.mock('@ui', () => ({
	__esModule: true,
	default: () => <div data-testid='icon' />,
	Icon: () => <div data-testid='icon' />,
	AnimatedNavLink: ({ children }: any) => (
		<div data-testid='animated-link'>{children}</div>
	)
}));

describe('[Header]', () => {
	it('renders header correctly and matches snapshot', () => {
		const mockLinks = {
			github: 'https://github.com/test',
			email: 'test@example.com',
			telegram: 'https://t.me/test'
		};

		const { container } = render(
			<SocialLinks.Provider value={mockLinks}>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</SocialLinks.Provider>
		);

		expect(container).toMatchSnapshot();
	});
});
