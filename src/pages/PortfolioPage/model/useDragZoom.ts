import { useEffect, useRef, useState } from 'react';

export const useDragZoom = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [scale, setScale] = useState(1);
	const startPos = useRef({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

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
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		} else {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}

		const container = containerRef.current;
		if (container) {
			container.addEventListener('wheel', handleWheel, {
				passive: false
			});
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			if (container) container.removeEventListener('wheel', handleWheel);
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
