import { FC, Suspense, useRef } from 'react';
import { PlasticSphereMaterial } from './PlasticSphereMaterial';
import { PlasticSphereProps } from './type';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { Preloader } from '@ui';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

/**
 * BREAKPOINT: Cannot read properties of undefined (reading 'length')
 * TODO: исправить ошибку и вкулючить Bloom
 */

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
						position: [0, 0, 5],
						fov: 45
					}}
					gl={{
						antialias: true,
						powerPreference: 'high-performance',
						alpha: true // Добавлено
					}}
					frameloop='demand'
					dpr={[1, 2]} // Добавлено
				>
					{/* Ваша сцена */}
					<axesHelper args={[5]} />
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<mesh ref={meshRef}>
						<icosahedronGeometry args={[baseRadius, 64]} />
						<PlasticSphereMaterial />
					</mesh>
					<OrbitControls />

					{/* Post-processing */}
					<EffectComposer>
						<Bloom
							intensity={1.5}
							luminanceThreshold={0.1}
							luminanceSmoothing={0.5}
							height={300}
						/>
					</EffectComposer>
				</Canvas>
			</div>
		</Suspense>
	);
};

export default PlasticSphere;
