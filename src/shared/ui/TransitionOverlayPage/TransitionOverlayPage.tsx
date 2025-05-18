import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './PageTransitionOverlay.module.scss';

export const TransitionOverlayPage = () => {
	const overlayRef = useRef<HTMLDivElement>(null);
	const darkWrapperRef = useRef<HTMLDivElement>(null);

	const location = useLocation();
	const [hasNavigated, setHasNavigated] = useState(false);

	useEffect(() => {
		if (!hasNavigated) {
			setHasNavigated(true);
			return;
		}

		const overlay = overlayRef.current;
		const darkWrapper = darkWrapperRef.current;
		const pageContent = document.getElementById('page-content');

		if (!overlay || !darkWrapper) return;

		const tl = gsap.timeline({
			defaults: {
				ease: 'power3.inOut'
			}
		});

		gsap.set(pageContent, { scale: 1 });
		darkWrapper.style.display = 'none';
		gsap.set(darkWrapper, { opacity: 0 });

		tl.to(overlay, {
			'--hole-width': '30vw',
			'--hole-height': '30vh',
			duration: 0.5,
			ease: 'power3.out'
		})
			.to(
				pageContent,
				{
					scale: 0.98,
					duration: 0.2
				},
				'<'
			)
			.to(overlay, {
				'--hole-width': '100vw',
				'--hole-height': '100vh',
				duration: 0.6,
				ease: 'expo.in'
			})
			.to(
				pageContent,
				{
					scale: 1,
					duration: 0.6,
					ease: 'expo.in',
					onComplete: () => {
						if (pageContent) {
							const currentTransform =
								pageContent.style.transform;
							const transformWithoutTranslate = currentTransform
								.replace(/translate\(.*?\)/, '')
								.trim();

							if (transformWithoutTranslate === '') {
								pageContent.style.removeProperty('transform');
							} else {
								pageContent.style.transform =
									transformWithoutTranslate;
							}
						}
					}
				},
				'<'
			);
	}, [location.pathname]);

	return (
		<>
			<div
				ref={darkWrapperRef}
				id='dark-wrapper'
				className={styles['dark-wrapper']}
			/>
			<div
				ref={overlayRef}
				id='transition-overlay'
				className={styles.overlay}
			/>
		</>
	);
};
