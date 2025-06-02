import { FC, Suspense } from 'react';
import { MusicSphere } from './MusicSphere';
import music from './lib/Zachz Winner - lover online _ Pluggnb _ NCS - Copyright Free Music.mp3';
import { Preloader } from '@ui';

export const MusicShape: FC = () => (
	<Suspense fallback={<Preloader />}>
		<MusicSphere audioUrl={music} sensitivity={1} />
	</Suspense>
);

export default MusicShape;
