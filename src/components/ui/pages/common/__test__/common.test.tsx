import { testRenderComponent } from '@utils-testing';
import { CommonPageUI } from '../common';

describe('[CommonPageUI]', () => {
	it('Renders common-page correctly and matches snapshot', () =>
		testRenderComponent(
			<CommonPageUI pageStyles='styles'>
				<p>page-test</p>
			</CommonPageUI>
		));
});
