import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './PageTransitionOverlay.module.scss';

export const TransitionOverlayPage = () => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const [hasNavigated, setHasNavigated] = useState(false);

	useEffect(() => {
		if (!hasNavigated) {
			setHasNavigated(true);
			return;
		}

		const overlay = overlayRef.current;
		if (!overlay) return;

		gsap.to(overlay, {
			y: '-100%',
			duration: 0.5,
			ease: 'power2.in',
			delay: 0.2
		});
	}, [location.pathname]);

	return (
		<div
			ref={overlayRef}
			id='transition-overlay'
			className={styles.overlay}
			style={{ transform: 'translateY(100%)' }}
		/>
	);
};
