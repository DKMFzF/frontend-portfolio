import { HelmetProvider } from 'react-helmet-async';
import { testRenderComponent } from '@utils-testing';
import { NotFound404UI } from '../not-fount-404';

describe('[NotFound404UI]', () => {
	it('Renders not-found-404 correctly and matches snapshot', () =>
		testRenderComponent(
			<HelmetProvider>
				<NotFound404UI />
			</HelmetProvider>
		));
});
