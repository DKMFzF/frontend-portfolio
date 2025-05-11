import { HelmetProvider } from 'react-helmet-async';
import { PortfolioPage } from '../ui/Portfolio/Portfolio';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

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
