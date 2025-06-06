import { FC, Suspense, useRef } from 'react';
import { PlasticSphereMaterial } from './PlasticSphereMaterial';
import { PlasticSphereProps } from './type';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { Preloader } from '@ui';
import { OrbitControls } from '@react-three/drei';

export const PlasticSphere: FC<PlasticSphereProps> = ({ baseRadius = 1.5 }) => {
	const meshRef = useRef<Mesh | null>(null);

	return (
		<Suspense fallback={<Preloader />}>
			<div
				style={{
					width: '100vw',
					height: '100vh',
					position: 'relative'
				}}
			>
				<Canvas
					camera={{
						position: [0, 0, 5],
						fov: 45
					}}
				>
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 10, 10]} />
					<mesh ref={meshRef}>
						<icosahedronGeometry args={[baseRadius, 64]} />
						<PlasticSphereMaterial />
					</mesh>
					<OrbitControls />
				</Canvas>
			</div>
		</Suspense>
	);
};

export default PlasticSphere;
