import {
	useCollisionDetection,
	useKeyboardControls,
	useMovement,
	useSceneObjects,
	useFixPointerLockSecurityError
} from '../hooks';
import { PointerLockControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';

import { FirstPersonControlsProps } from './type';

export const FirstPersonControls = ({
	targetPosition,
	onExit
}: FirstPersonControlsProps) => {
	const { camera } = useThree();
	const initialHeight = useRef<number | null>(null);
	const controlsRef = useRef(null);

	const keys = useKeyboardControls(onExit);
	const { wallsRef } = useSceneObjects();
	const { playerCollider, checkWallCollisions } =
		useCollisionDetection(wallsRef);

	useMovement(keys, checkWallCollisions, playerCollider, initialHeight);
	useFixPointerLockSecurityError(onExit);

	useEffect(() => {
		if (targetPosition) {
			const cameraPosition = targetPosition
				.clone()
				.add(new Vector3(0, 1.7, 0));
			initialHeight.current = cameraPosition.y;
			camera.position.copy(cameraPosition);
			camera.rotation.set(0, 0, 0);
			playerCollider.current.position.copy(cameraPosition);

			// @ts-ignore
			if (controlsRef.current) controlsRef.current.lock();
		}
	}, [targetPosition, camera, playerCollider]);

	return <PointerLockControls ref={controlsRef} />;
};
