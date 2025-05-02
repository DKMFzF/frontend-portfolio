import { MemoryRouter } from 'react-router-dom';
import { testRenderComponent } from '@utils-testing';
import { AppHeaderUI } from '../app-header';

jest.mock(
	'../../../../../public/kirill-doroshev-resume.pdf',
	() => 'test-resume.pdf'
);

describe('[AppHeaderUI]', () => {
	it('Renders header correctly and matches snapshot', () =>
		testRenderComponent(
			<MemoryRouter>
				<AppHeaderUI
					links={{
						github: '',
						email: '',
						telegram: ''
					}}
				/>
			</MemoryRouter>
		));
});
