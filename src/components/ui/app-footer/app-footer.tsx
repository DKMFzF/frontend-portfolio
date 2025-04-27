import { FC } from 'react';
import styles from './app-footer.module.scss';

export const AppFooterUI: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.footer__social}>
					<a
						href='https://github.com/DKMFZF'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className={styles.footer__socialLink}
					>
						GitHub
					</a>
					<a
						href='https://vk.com/dkmfzf'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className={styles.footer__socialLink}
					>
						VK
					</a>
					<a
						href='https://habr.com/ru/users/DKMFzF/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Twitter'
						className={styles.footer__socialLink}
					>
						Habr
					</a>
					<a
						href='https://t.me/DKMFZF'
						aria-label='Email'
						className={styles.footer__socialLink}
					>
						Tg
					</a>
				</div>
				<div className={styles.footer__bottom}>
					<span className={styles.footer__text}>VERSION 1.38.1</span>
					<p>&copy; {currentYear} DKMFZF PORTFOLIO</p>
				</div>
			</div>
		</footer>
	);
};
