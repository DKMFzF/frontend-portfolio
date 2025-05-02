import styles from './preloader.module.scss';

export const PreloaderUI = () => (
	<div className={styles.preloader}>
		<div className={styles['preloader-circle']} />
	</div>
);
