import { MouseFollower } from '../ui/MouseFollower';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';

describe('[MouseFollowerUI]', () => {
	it('Renders mouse-follower correctly and matches snapshot', () => {
		const { asFragment } = render(<MouseFollower />);
		expect(asFragment()).toMatchSnapshot();
	});
});
