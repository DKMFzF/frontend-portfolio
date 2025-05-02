import { AboutMePageUI } from '../about-me';
import { HelmetProvider } from 'react-helmet-async';
import { testRenderComponent } from '@utils-testing';

jest.mock(
	'../../../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

describe('[AboutMePageUI]', () => {
	it('Renders about-me-page correctly and matches snapshot', () =>
		testRenderComponent(
			<HelmetProvider>
				<AboutMePageUI />
			</HelmetProvider>
		));
});
