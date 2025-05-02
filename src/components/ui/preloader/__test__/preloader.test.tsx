import { testRenderComponent } from '@utils-testing';
import { PreloaderUI } from '../preloader';

describe('[PreloaderUI]', () => {
	it('Renders preloader correctly and matches snapshot', () =>
		testRenderComponent(<PreloaderUI />));
});
