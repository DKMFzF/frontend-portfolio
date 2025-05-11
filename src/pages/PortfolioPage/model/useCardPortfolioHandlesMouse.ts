import { useRef } from 'react';
import gsap from 'gsap';

export const useCardPortfolioHandlesMouse = () => {
	const cardRef = useRef<HTMLAnchorElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	const tl = gsap.timeline({
		defaults: {
			ease: 'power3.out'
		}
	});

	const handleMouseEnter = () => {
		if (cardRef.current) {
			tl.to(cardRef.current, {
				scale: 1.07,
				boxShadow: '0 0 25px rgba(0,0,0,0.2)',
				duration: 0.3
			});
			cardRef.current.style.zIndex = '2';
		}

		if (titleRef.current) {
			tl.to(titleRef.current, {
				x: 0,
				duration: 0.5
			});
		}
	};

	const handleMouseLeave = () => {
		if (cardRef.current) {
			tl.to(cardRef.current, {
				scale: 1,
				boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
				duration: 0.3
			});
			cardRef.current.style.zIndex = '1';
		}

		if (titleRef.current) {
			tl.to(titleRef.current, {
				x: '-100%',
				duration: 0.5
			});
		}
	};

	return {
		cardRef,
		titleRef,
		handleMouseEnter,
		handleMouseLeave
	};
};
