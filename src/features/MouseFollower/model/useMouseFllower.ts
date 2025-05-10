import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMouseFllower = () => {
	const circleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const circle = circleRef.current;

		if (!circle) return;

		const moveCircle = (e: MouseEvent) => {
			const tl = gsap.timeline({});
			tl.to(circle, {
				duration: 0.4,
				x: e.clientX,
				y: e.clientY,
				ease: 'power1.out'
			});
		};

		window.addEventListener('mousemove', moveCircle);

		return () => {
			window.removeEventListener('mousemove', moveCircle);
		};
	}, []);

	return { circleRef };
};
