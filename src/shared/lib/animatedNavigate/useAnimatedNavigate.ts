import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export const useAnimatedNavigate = () => {
	const navigate = useNavigate();

	return (path: string) => {
		const overlay = document.getElementById('transition-overlay');
		const pageContent = document.getElementById('page-content');
		const darkWrapper = document.getElementById('dark-wrapper');

		if (!overlay || !pageContent || !darkWrapper) return navigate(path);

		gsap.set(overlay, {
			y: '100%',
			'--hole-width': '0',
			'--hole-height': '0'
		});
		darkWrapper.style.display = 'block';

		const tl = gsap.timeline({
			defaults: {
				ease: 'power3.inOut'
			}
		});

		tl.to(pageContent, {
			scale: '0.75',
			duration: 0.5
		})
			.to(
				darkWrapper,
				{
					opacity: 0.9,
					duration: 0.3
				},
				'<'
			)
			.to(overlay, {
				y: '0%',
				duration: 0.5,
				onComplete: () => {
					navigate(path);
				}
			});
	};
};
