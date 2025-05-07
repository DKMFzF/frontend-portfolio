import { KnowledgeSidebar } from '../ui/KnowledgeSidebar';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';

describe('[KnowledgeSidebarUI]', () => {
	it('Renders knowledge-sidebar correctly and matches snapshot', () => {
		const { asFragment } = render(<KnowledgeSidebar />);
		expect(asFragment()).toMatchSnapshot();
	});
});
