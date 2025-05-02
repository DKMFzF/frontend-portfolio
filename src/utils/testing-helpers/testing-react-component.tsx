import { getByTestId, render } from '@testing-library/react';
import { expect } from '@jest/globals';

export const testRenderComponent = (Component: React.ReactElement) => {
	const { asFragment } = render(Component);
	expect(asFragment()).toMatchSnapshot();
};

export const testCurrentText = (
	component: React.ReactElement,
	testId: string,
	expectedText: string
) => {
	const { container } = render(component);
	const yearElement = getByTestId(container, testId);
	expect(yearElement.textContent).toBe(expectedText);
};
