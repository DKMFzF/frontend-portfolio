import { type RefObject, useEffect, useRef } from 'react';
import { Group } from 'three';
import gsap from 'gsap';

export const useAnimationRotaringModel = (
	modelRef: RefObject<Group>,
	rotationDirection: number
) => {
	const animationRef = useRef<gsap.core.Tween>();

	useEffect(() => {
		if (!modelRef.current) return;

		animationRef.current?.kill();

		animationRef.current = gsap.to(modelRef.current?.rotation, {
			x: `+=${rotationDirection * Math.PI * 2}`,
			y: `+=${rotationDirection * Math.PI * 2}`,
			z: `+=${rotationDirection * Math.PI * 2}`,
			duration: 100,
			repeat: -1,
			ease: 'none'
		});

		return () => {
			animationRef.current?.kill();
		};
	}, [rotationDirection]);
};
