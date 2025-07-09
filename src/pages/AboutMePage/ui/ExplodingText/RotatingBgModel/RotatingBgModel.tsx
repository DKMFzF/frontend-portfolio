import { useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group } from 'three';
import gsap from 'gsap';
import { type RotatingBgModelProps } from './type';

export const RotatingBgModel = ({
	modelPath,
	rotationDirection,
	basePosition
}: RotatingBgModelProps) => {
	const gltf = useGLTF(modelPath);
	const modelRef = useRef<Group>(null);

	useEffect(() => {
		if (modelRef.current) {
			gsap.to(modelRef.current.rotation, {
				x: `+=${rotationDirection * Math.PI * 2}`,
				y: `+=${rotationDirection * Math.PI * 2}`,
				z: `+=${rotationDirection * Math.PI * 2}`,
				duration: 100,
				repeat: -1,
				ease: 'none'
			});
		}
	}, [rotationDirection]);

	return (
		<>
			<primitive
				ref={modelRef}
				object={gltf.scene}
				scale={5}
				position={basePosition}
			/>
		</>
	);
};
