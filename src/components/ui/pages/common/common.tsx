import { FC } from 'react';
import { TCommonPageUIProps } from './type';
import styles from './common.module.scss';

export const CommonPageUI: FC<TCommonPageUIProps> = ({
	pageStyles = '',
	children
}) => (
	<main className={styles.main}>
		{/* <div className={styles.main__wrapperSection}> */}
		<section className={`${styles.main__sectionBg} ${pageStyles}`}>
			{children}
		</section>
		{/* </div> */}
	</main>
);
