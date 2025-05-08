import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const useAnimatedNavigate = () => {
	const navigate = useNavigate();

	return (path: string) => {
		const overlay = document.getElementById('transition-overlay');
		if (!overlay) return navigate(path);

		gsap.set(overlay, { y: '100%' });

		gsap.to(overlay, {
			y: '0%',
			duration: 0.5,
			ease: 'power2.out',
			onComplete: () => {
				navigate(path);
			}
		});
	};
};
