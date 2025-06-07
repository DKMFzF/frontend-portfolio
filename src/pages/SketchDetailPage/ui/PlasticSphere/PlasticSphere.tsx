import { FC, Suspense, useRef } from 'react';
import { PlasticSphereMaterial } from './PlasticSphereMaterial';
import { PlasticSphereProps } from './type';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { Preloader } from '@ui';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export const PlasticSphere: FC<PlasticSphereProps> = ({ baseRadius = 1.5 }) => {
	const meshRef = useRef<Mesh>(null);

	return (
		<Suspense fallback={<Preloader />}>
			<div
				style={{
					width: '100vw',
					height: '100vh',
					position: 'relative',
					backgroundColor: 'black'
				}}
			>
				<Canvas
					camera={{
						position: [0, 0, 10],
						fov: 30
					}}
					style={{
						filter: 'blur(4px)'
					}}
				>
					<ambientLight intensity={1} />
					<mesh ref={meshRef}>
						<icosahedronGeometry args={[baseRadius, 64]} />
						<PlasticSphereMaterial />
					</mesh>

					<EffectComposer>
						<Bloom
							intensity={1.0}
							luminanceThreshold={0.5}
							luminanceSmoothing={1.5}
							height={300}
							kernelSize={5}
						/>
					</EffectComposer>
				</Canvas>
			</div>
		</Suspense>
	);
};

export default PlasticSphere;
