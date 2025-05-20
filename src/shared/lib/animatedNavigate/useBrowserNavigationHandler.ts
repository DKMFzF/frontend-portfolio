import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAnimatedNavigate } from './useAnimatedNavigate';

export const useBrowserNavigationHandler = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const animatedNavigate = useAnimatedNavigate();

	useEffect(() => {
		const handlePopState = () => {
			navigate(location.pathname + location.search, { replace: true });
		};

		window.addEventListener('popstate', handlePopState);

		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, [location, navigate, animatedNavigate]);
};
