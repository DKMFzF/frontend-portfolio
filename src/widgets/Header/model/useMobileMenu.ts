import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

export const useMobileMenu = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const mobileMenuContentRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLBodyElement | null>(null);

	useEffect(() => {
		bodyRef.current = document.querySelector('body');
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target as Node)
			) {
				closeMenu();
			}
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') closeMenu();
		};

		if (isMobileMenuOpen) {
			if (bodyRef.current) {
				bodyRef.current.style.overflow = 'hidden';
				bodyRef.current.style.touchAction = 'none';
			}

			document.addEventListener('mousedown', handleClickOutside);
			document.addEventListener('keydown', handleKeyDown);
			animateMenuIn();
		} else {
			if (bodyRef.current) {
				bodyRef.current.style.overflow = '';
				bodyRef.current.style.touchAction = '';
			}

			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		}

		return () => {
			if (bodyRef.current) {
				bodyRef.current.style.overflow = '';
				bodyRef.current.style.touchAction = '';
			}

			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isMobileMenuOpen]);

	const animateMenuIn = () => {
		gsap.fromTo(
			overlayRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 0.3, ease: 'power2.out' }
		);

		if (mobileMenuContentRef.current) {
			gsap.fromTo(
				mobileMenuContentRef.current,
				{ x: '100%', opacity: 0 },
				{ x: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }
			);
		}
	};

	const animateMenuOut = (callback: () => void) => {
		gsap.to(overlayRef.current, {
			opacity: 0,
			duration: 0.3,
			ease: 'power2.in'
		});

		if (mobileMenuContentRef.current) {
			gsap.to(mobileMenuContentRef.current, {
				x: '100%',
				opacity: 0,
				duration: 0.3,
				ease: 'power2.in',
				onComplete: callback
			});
		} else {
			callback();
		}
	};

	const toggleMenu = () => {
		if (isMobileMenuOpen) {
			animateMenuOut(() => setIsMobileMenuOpen(false));
		} else {
			setIsMobileMenuOpen(true);
		}
	};

	const closeMenu = () => {
		if (isMobileMenuOpen) {
			animateMenuOut(() => setIsMobileMenuOpen(false));
		}
	};

	return {
		isMobileMenuOpen,
		menuRef,
		mobileMenuContentRef,
		overlayRef,
		toggleMenu,
		closeMenu
	};
};
