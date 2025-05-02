import { testRenderComponent } from '@utils-testing';
import { CardsProjectUI } from '../cards-project';

describe('[CardsProjectUI]', () => {
	it('Renders card-project correctly and matches snapshot', () =>
		testRenderComponent(
			<CardsProjectUI
				cards={[
					{
						id: 1,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 110,
						y: 110,
						rotation: 10
					},
					{
						id: 2,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 220,
						y: 220,
						rotation: 20
					},
					{
						id: 3,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 330,
						y: 330,
						rotation: -10
					},
					{
						id: 4,
						title: 'string',
						content: 'string',
						link: 'string',
						x: 440,
						y: 440,
						rotation: -20
					}
				]}
				transformStyle='test-styles'
			/>
		));
});
