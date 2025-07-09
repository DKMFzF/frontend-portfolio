import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import { RotatingBgModel } from './RotatingBgModel';
import styles from './FacadeRenderScale.module.scss';

export const FacedRenderScale = () => (
	<div className={styles['exploding-text']}>
		<Canvas
			orthographic
			camera={{
				zoom: 60,
				position: [0, 0, 100],
				near: 0.1,
				far: 1000
			}}
		>
			<ambientLight intensity={1} />
			<directionalLight position={[5, 5, 5]} />
			<Suspense fallback={null}>
				<RotatingBgModel
					modelPath='/ts.glb'
					rotationDirection={1}
					basePosition={[-14, 3.5, 0]}
				/>
				<RotatingBgModel
					modelPath='/js.glb'
					rotationDirection={-1}
					basePosition={[14, -3.5, 0]}
				/>
			</Suspense>
		</Canvas>
	</div>
);
