import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { expect } from '@jest/globals';
import { testRenderComponent } from '@utils-testing';
import { PortfolioPageUI } from '../portfolio';

jest.mock('@hooks', () => ({
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

jest.mock('@components', () => ({
	__esModule: true,
	CardsProject: jest.fn(() => <div>CardsProject Mock</div>)
}));

describe('[PortfolioPageUI]', () => {
	beforeEach(() => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 1920
		});
	});

	it('should render desktop view correctly', () => {
		testRenderComponent(
			<HelmetProvider>
				<PortfolioPageUI />
			</HelmetProvider>
		);
	});

	it('should render mobile view correctly', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			configurable: true,
			value: 800
		});

		testRenderComponent(
			<HelmetProvider>
				<PortfolioPageUI />
			</HelmetProvider>
		);
	});
});
