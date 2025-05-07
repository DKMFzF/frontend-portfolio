import { AboutMePage } from '../ui/AboutMe/AboutMePage';
import { HelmetProvider } from 'react-helmet-async';
import { render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { AboutMeArticle } from '../ui/AboutMeArticle';
import { ExperienceCard } from '../ui/ExperienceCard';

jest.mock(
	'../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

describe('[AboutMePage]', () => {
	it('Renders about-me-page correctly and matches snapshot', () => {
		const { asFragment } = render(
			<HelmetProvider>
				<AboutMePage />
			</HelmetProvider>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('[AboutMeArticle]', () => {
	it('[All props true]: Renders about-me-article correctly and matches snapshot', () => {
		const { asFragment } = render(
			<AboutMeArticle
				subtitle='subtitle'
				className='classname'
				borderPrimaryColorFlag
				paddingFlag
				borderRadiusFlag
				borderFlag
				flexFlag
			>
				<p>Test element</p>
			</AboutMeArticle>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	it('[All props false]: Renders about-me-article correctly and matches snapshot', () => {
		const { asFragment } = render(
			<AboutMeArticle>
				<p>Test element</p>
			</AboutMeArticle>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});

describe('[ExperienceCard]', () => {
	it('Renders experience-card correctly and matches snapshot', () => {
		const { asFragment } = render(<ExperienceCard />);
		expect(asFragment()).toMatchSnapshot();
	});
});
