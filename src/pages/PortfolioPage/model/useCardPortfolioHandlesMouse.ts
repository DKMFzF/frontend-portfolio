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
		tl.clear();

		if (cardRef.current) {
			tl.to(cardRef.current, {
				scale: 1.07
			});
			cardRef.current.style.zIndex = '2';
		}

		if (titleRef.current) {
			tl.to(
				titleRef.current,
				{
					x: 0
				},
				'<'
			);
		}
	};

	const handleMouseLeave = () => {
		tl.clear();

		if (cardRef.current) {
			tl.to(cardRef.current, {
				scale: 1
			});
			cardRef.current.style.zIndex = '1';
		}

		if (titleRef.current) {
			tl.to(
				titleRef.current,
				{
					x: '-100%'
				},
				'<'
			);
		}
	};

	return {
		cardRef,
		titleRef,
		handleMouseEnter,
		handleMouseLeave
	};
};
