import type { ObjectsAccessChanges } from '../types/ViewModelSectionType';
import { OBJECT_TYPES } from './config';

export const checkNameMatch = (
	childName: string,
	type: ObjectsAccessChanges
) => {
	const { exact, startsWith } = OBJECT_TYPES[type];
	return exact
		? childName === exact
		: childName.toLowerCase().startsWith(startsWith!);
};
