import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function LaptopModel() {
	const gltf = useGLTF('/laptope.glb');
	return <primitive object={gltf.scene} scale={8} position={[-14, 3.5, 0]} />;
}

function ClockModel() {
	const gltf = useGLTF('/clock.glb');
	return <primitive object={gltf.scene} scale={1} position={[14, -6.5, 0]} />;
}

export const ExplodingText = () => (
	<div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
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
				<LaptopModel />
				<ClockModel />
			</Suspense>
		</Canvas>
	</div>
);
