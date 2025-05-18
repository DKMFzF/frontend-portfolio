import { SketcheListProps } from './type';
import styles from './SketcheList.module.scss';

export const SketchesList = ({ children }: SketcheListProps) => (
	<ul className={styles.sketche__list}>{children}</ul>
);
