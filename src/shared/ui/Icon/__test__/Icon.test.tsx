import { render, screen } from '@testing-library/react';
import { expect } from '@jest/globals';
import { Icon } from '../Icon';

jest.mock('@images/email.svg', () => ({
	__esModule: true,
	ReactComponent: () => <div data-testid='email-icon' />
}));

jest.mock('@images/githab.svg', () => ({
	__esModule: true,
	ReactComponent: () => <div data-testid='github-icon' />
}));

jest.mock('@images/telegram.svg', () => ({
	__esModule: true,
	ReactComponent: () => <div data-testid='telegram-icon' />
}));

describe('[Icon]', () => {
	it('should render all icons when all links are provided', () => {
		const links = {
			email: 'mailto:test@example.com',
			github: 'https://github.com/test',
			telegram: 'https://t.me/test'
		};

		render(<Icon links={links} />);

		expect(screen.getByTestId('email-icon')).toBeInTheDocument();
		expect(screen.getByTestId('github-icon')).toBeInTheDocument();
		expect(screen.getByTestId('telegram-icon')).toBeInTheDocument();
	});

	it('should render only available icons', () => {
		const links = {
			email: 'mailto:test@example.com',
			github: undefined,
			telegram: 'https://t.me/test'
		};

		render(<Icon links={links} />);

		expect(screen.getByTestId('email-icon')).toBeInTheDocument();
		expect(screen.queryByTestId('github-icon')).not.toBeInTheDocument();
		expect(screen.getByTestId('telegram-icon')).toBeInTheDocument();
	});

	it('should match snapshot with all icons', () => {
		const links = {
			email: 'mailto:test@example.com',
			github: 'https://github.com/test',
			telegram: 'https://t.me/test'
		};

		const { asFragment } = render(<Icon links={links} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
