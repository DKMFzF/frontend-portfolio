import { useEffect, useRef, useState } from 'react';

export const useDragZoom = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({
		x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
		y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0
	});
	const [scale, setScale] = useState(1);
	const startPos = useRef({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);
	const touchStartDistance = useRef(0);
	const touchStartScale = useRef(1);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (
			e.target === e.currentTarget ||
			!(e.target as HTMLElement).closest('a')
		) {
			setIsDragging(true);
			startPos.current = {
				x: e.clientX - position.x,
				y: e.clientY - position.y
			};
		}
	};

	const handleTouchStart = (e: TouchEvent) => {
		if (e.touches.length === 1) {
			// Одиночное касание - перемещение
			setIsDragging(true);
			startPos.current = {
				x: e.touches[0].clientX - position.x,
				y: e.touches[0].clientY - position.y
			};
		} else if (e.touches.length === 2) {
			// Двойное касание - зум
			const touch1 = e.touches[0];
			const touch2 = e.touches[1];
			touchStartDistance.current = Math.hypot(
				touch2.clientX - touch1.clientX,
				touch2.clientY - touch1.clientY
			);
			touchStartScale.current = scale;
			e.preventDefault();
		}
	};

	const handleTouchMove = (e: TouchEvent) => {
		if (isDragging && e.touches.length === 1) {
			// Перемещение
			setPosition({
				x: e.touches[0].clientX - startPos.current.x,
				y: e.touches[0].clientY - startPos.current.y
			});
		} else if (e.touches.length === 2) {
			// Зум
			const touch1 = e.touches[0];
			const touch2 = e.touches[1];
			const currentDistance = Math.hypot(
				touch2.clientX - touch1.clientX,
				touch2.clientY - touch1.clientY
			);

			const newScale = Math.min(
				Math.max(
					0.5,
					touchStartScale.current *
						(currentDistance / touchStartDistance.current)
				),
				2
			);

			// Центр между двумя пальцами
			const centerX = (touch1.clientX + touch2.clientX) / 2;
			const centerY = (touch1.clientY + touch2.clientY) / 2;

			const rect = containerRef.current?.getBoundingClientRect();
			if (rect) {
				const mouseX = centerX - rect.left;
				const mouseY = centerY - rect.top;

				setPosition((prev) => ({
					x: mouseX - (mouseX - prev.x) * (newScale / scale),
					y: mouseY - (mouseY - prev.y) * (newScale / scale)
				}));
			}

			setScale(newScale);
			e.preventDefault();
		}
	};

	const handleTouchEnd = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			setPosition({
				x: e.clientX - startPos.current.x,
				y: e.clientY - startPos.current.y
			});
		}
	};

	const handleMouseUp = () => setIsDragging(false);

	const handleWheel = (e: WheelEvent) => {
		e.preventDefault();
		const delta = e.deltaY > 0 ? -0.1 : 0.1;
		const newScale = Math.min(Math.max(0.5, scale + delta), 2);

		const rect = containerRef.current?.getBoundingClientRect();
		if (rect) {
			const mouseX = e.clientX - rect.left;
			const mouseY = e.clientY - rect.top;

			setPosition((prev) => ({
				x: mouseX - (mouseX - prev.x) * (newScale / scale),
				y: mouseY - (mouseY - prev.y) * (newScale / scale)
			}));
		}

		setScale(newScale);
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		// Десктопные события
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		} else {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}

		container.addEventListener('wheel', handleWheel, { passive: false });

		// Мобильные события
		container.addEventListener('touchstart', handleTouchStart, {
			passive: false
		});
		container.addEventListener('touchmove', handleTouchMove, {
			passive: false
		});
		container.addEventListener('touchend', handleTouchEnd);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			container.removeEventListener('wheel', handleWheel);
			container.removeEventListener('touchstart', handleTouchStart);
			container.removeEventListener('touchmove', handleTouchMove);
			container.removeEventListener('touchend', handleTouchEnd);
		};
	}, [isDragging, scale]);

	return {
		isDragging,
		position,
		scale,
		handleMouseDown,
		containerRef
	};
};
