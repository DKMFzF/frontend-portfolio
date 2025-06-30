import { type CommonFullPageProps } from './type';
import styles from './CommonFullPage.module.scss';

export const CommonFullPage = ({
	children,
	pageStyles = ''
}: CommonFullPageProps) => (
	<main className={styles['common-full-page']}>
		<div className={`${styles['common-full-page__content']} ${pageStyles}`}>
			{children}
		</div>
	</main>
);
