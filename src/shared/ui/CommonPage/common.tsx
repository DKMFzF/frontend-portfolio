import { FC } from 'react';
import { TCommonPageUIProps } from './type';
import styles from './common.module.scss';

export const CommonPage: FC<TCommonPageUIProps> = ({
	pageStyles = '',
	children,
	isCentralPage = false
}) => (
	<main
		className={`${
			isCentralPage ? styles['main--central-page'] : styles.main
		}`}
	>
		<div
			className={`${
				isCentralPage
					? styles['main__content-wrapper--central-page']
					: styles['main__content-wrapper']
			}
		`}
		>
			<div className={`${styles.main__content} ${pageStyles}`}>
				{children}
			</div>
		</div>
	</main>
);
