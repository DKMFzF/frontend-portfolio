import { testRenderComponent } from '@utils-testing';
import { AboutMeArticleUI } from '../about-me-article';

describe('[AboutMeArticleUI]', () => {
	it('[All props true]: Renders about-me-article correctly and matches snapshot', () =>
		testRenderComponent(
			<AboutMeArticleUI
				subtitle='subtitle'
				className='classname'
				borderPrimaryColorFlag
				paddingFlag
				borderRadiusFlag
				borderFlag
				flexFlag
			>
				<p>Test element</p>
			</AboutMeArticleUI>
		));

	it('[All props false]: Renders about-me-article correctly and matches snapshot', () =>
		testRenderComponent(
			<AboutMeArticleUI>
				<p>Test element</p>
			</AboutMeArticleUI>
		));
});
