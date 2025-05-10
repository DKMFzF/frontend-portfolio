import { useMouseFllower } from '../model/useMouseFllower';
import styles from './MouseFollower.module.scss';

export const MouseFollower = () => {
	const { circleRef } = useMouseFllower();

	return (
		<div
			ref={circleRef}
			className={styles['mouse-follower']}
			aria-hidden='true'
			role='presentation'
			data-testid='mouse-follower'
			data-cy='mouse-follower'
		/>
	);
};
