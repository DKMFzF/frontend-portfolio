import { useEffect, useState, useCallback } from 'react';

export const useCardSlider = (
	itemsLength: number,
	intervalTime = 5000,
	animationDelay = 300
) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [transitioning, setTransitioning] = useState(false);

	const handleNext = useCallback(() => {
		if (transitioning) return;
		setTransitioning(true);
		setTimeout(() => {
			setCurrentIndex((prev) => (prev + 1) % itemsLength);
			setTransitioning(false);
		}, animationDelay);
	}, [transitioning, itemsLength, animationDelay]);

	const handlePrev = useCallback(() => {
		if (transitioning) return;
		setTransitioning(true);
		setTimeout(() => {
			setCurrentIndex((prev) =>
				prev === 0 ? itemsLength - 1 : prev - 1
			);
			setTransitioning(false);
		}, animationDelay);
	}, [transitioning, itemsLength, animationDelay]);

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, intervalTime);

		return () => clearInterval(interval);
	}, [handleNext, intervalTime]);

	return { currentIndex, transitioning, handleNext, handlePrev };
};
