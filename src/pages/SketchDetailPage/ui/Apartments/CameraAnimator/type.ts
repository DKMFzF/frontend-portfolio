import type { AnimationCameraTypes } from '../types/ViewModelSectionType';

export type CameraAnimatorProps = {
	cameraAnimation: AnimationCameraTypes | null;
	onAnimationComplete: () => void;
};
