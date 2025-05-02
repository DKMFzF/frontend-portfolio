import { testRenderComponent } from '@utils-testing';
import { ExperienceCardUI } from '../eperience-card';

describe('[ExperienceCardUI]', () => {
	it('Renders experience-card correctly and matches snapshot', () =>
		testRenderComponent(<ExperienceCardUI />));
});
