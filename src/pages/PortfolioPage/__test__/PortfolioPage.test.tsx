import { InteractiveBoard } from '../ui/InteractiveBoard';
import { HelmetProvider } from 'react-helmet-async';
import { PortfolioPage } from '../ui/Portfolio/Portfolio';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

describe('[InteractiveBoard]', () => {
	it('Renders card-project correctly and matches snapshot', () => {
		const { asFragment } = render(
			<InteractiveBoard
				cards={[
					{
						id: 1,
						logo: '',
						title: 'string',
						link: 'string',
						settingsView: {
							x: 110,
							y: 110,
							rotation: 10,
							bgColor: ''
						}
					},
					{
						id: 1,
						logo: '',
						title: 'string',
						link: 'string',
						settingsView: {
							x: 110,
							y: 110,
							rotation: 10,
							bgColor: ''
						}
					},
					{
						id: 1,
						logo: '',
						title: 'string',
						link: 'string',
						settingsView: {
							x: 110,
							y: 110,
							rotation: 10,
							bgColor: ''
						}
					},
					{
						id: 1,
						logo: '',
						title: 'string',
						link: 'string',
						settingsView: {
							x: 110,
							y: 110,
							rotation: 10,
							bgColor: ''
						}
					}
				]}
				transformStyle='test-styles'
			/>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

jest.mock('../model', () => ({
	__esModule: true,
	useDragZoom: jest.fn(() => ({
		isDragging: false,
		position: { x: 0, y: 0 },
		scale: 1,
		handleMouseDown: jest.fn(),
		containerRef: { current: null }
	})),
	useCards: jest.fn(() => ({
		cards: [
			{ x: 0, y: 0, rotation: 0, width: 100, height: 100 },
			{ x: 100, y: 100, rotation: 10, width: 100, height: 100 }
		]
	}))
}));

jest.mock('../ui/InteractiveBoard', () => ({
	__esModule: true,
	InteractiveBoard: jest.fn(() => <div>InteractiveBoard Mock</div>)
}));

describe('[PortfolioPage]', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1920
		});
	});

	it('should render desktop view correctly', () => {
		const { asFragment } = render(
			<HelmetProvider>
				<PortfolioPage />
			</HelmetProvider>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('should render mobile view correctly', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 800
		});
		const { asFragment } = render(
			<HelmetProvider>
				<PortfolioPage />
			</HelmetProvider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
