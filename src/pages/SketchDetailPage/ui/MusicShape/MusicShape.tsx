import { FC, Suspense } from 'react';
import { MusicSphere } from './MusicSphere';
import music from './lib/music.mp3';
import { Preloader } from '@ui';

export const MusicShape: FC = () => (
	<Suspense fallback={<Preloader />}>
		<MusicSphere audioUrl={music} sensitivity={0.7} />
	</Suspense>
);

export default MusicShape;
