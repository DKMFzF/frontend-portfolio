import { Helmet } from 'react-helmet-async';

import { SketchesList } from '../SketchesList';
import { SketchesCard } from '../SketchesCard';
import { CommonPage } from '@ui';
import styles from './Sketches.module.scss';

import { META_SITE_DATA, sketchesData } from '@config';

export const Sketches = () => (
	<>
		<Helmet>
			<title>{META_SITE_DATA.titles.sketches.mainPage}</title>
		</Helmet>
		<CommonPage pageStyles={styles.sketches}>
			<SketchesList>
				{sketchesData.map((dataCard) => (
					<SketchesCard
						key={dataCard.id}
						id={dataCard.id}
						screenshot={dataCard.screenshot}
						title={dataCard.title}
						tags={dataCard.tags}
						github={dataCard.github}
					/>
				))}
			</SketchesList>
		</CommonPage>
	</>
);

export default Sketches;
