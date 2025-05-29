import { useEffect } from 'react';

export const useFixPointerLockSecurityError = (onExit: () => void) => {
	useEffect(() => {
		const handlePointerLockChange = () => {
			if (!document.pointerLockElement && onExit) onExit();
		};

		document.addEventListener('pointerlockchange', handlePointerLockChange);
		return () => {
			document.removeEventListener(
				'pointerlockchange',
				handlePointerLockChange
			);
		};
	}, [onExit]);
};
