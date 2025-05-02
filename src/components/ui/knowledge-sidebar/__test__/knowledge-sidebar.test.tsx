import { testRenderComponent } from '@utils-testing';
import { KnowledgeSidebarUI } from '../knowledge-sidebar';

describe('[KnowledgeSidebarUI]', () => {
	it('Renders knowledge-sidebar correctly and matches snapshot', () =>
		testRenderComponent(<KnowledgeSidebarUI />));
});
