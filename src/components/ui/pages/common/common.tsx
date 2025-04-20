import { FC } from 'react';
import { TCommonPageUIProps } from './type';
import styles from './common.module.scss';

export const CommonPageUI: FC<TCommonPageUIProps> = ({
	pageStyles = '',
	children
}) => (
	<main className={styles.container}>
		<section className={`${styles.sectionBg} ${pageStyles}`}>
			{children}
		</section>
	</main>
);
