import { CardsProject } from '../ui/CardsProject';
import { HelmetProvider } from 'react-helmet-async';
import { PortfolioPage } from '../ui/Portfolio/Portfolio';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';

describe('[CardsProject]', () => {
	it('Renders card-project correctly and matches snapshot', () => {
		const { asFragment } = render(
			<CardsProject
				cards={[
					{
						id: 1,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 110,
						y: 110,
						rotation: 10
					},
					{
						id: 2,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 220,
						y: 220,
						rotation: 20
					},
					{
						id: 3,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 330,
						y: 330,
						rotation: -10
					},
					{
						id: 4,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 440,
						y: 440,
						rotation: -20
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

jest.mock('../ui/CardsProject', () => ({
	__esModule: true,
	CardsProject: jest.fn(() => <div>CardsProject Mock</div>)
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
