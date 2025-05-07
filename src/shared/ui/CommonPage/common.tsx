import { FC } from 'react';
import { TCommonPageUIProps } from './type';
import styles from './common.module.scss';

export const CommonPage: FC<TCommonPageUIProps> = ({
	pageStyles = '',
	children
}) => (
	<main className={styles.main}>
		<section className={`${styles['main__section-bg']} ${pageStyles}`}>
			{children}
		</section>
	</main>
);
