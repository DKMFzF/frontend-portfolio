import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Group } from 'three';

import { useAnimationRotaringModel } from '../../../lib';
import { type RotatingBgModelProps } from './type';

export const RotatingBgModel = ({
	modelPath,
	rotationDirection,
	basePosition,
	link = ''
}: RotatingBgModelProps) => {
	const gltf = useGLTF(modelPath);
	const modelRef = useRef<Group>(null);
	const [isHover, setIsHover] = useState<boolean>(false);

	useAnimationRotaringModel(modelRef, rotationDirection);

	return (
		<>
			<primitive
				ref={modelRef}
				object={gltf.scene}
				scale={5}
				position={basePosition}
				onPointerOver={() => {
					setIsHover(true);
					document.body.style.cursor = 'pointer';
				}}
				onPointerOut={() => {
					setIsHover(false);
					document.body.style.cursor = 'auto';
				}}
				onClick={(evt: MouseEvent) => {
					evt.stopPropagation();
					window.open(link, '_blank');
				}}
			/>
		</>
	);
};
