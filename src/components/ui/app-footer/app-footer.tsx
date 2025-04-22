import { FC } from 'react';
import styles from './app-footer.module.scss';

export const AppFooterUI: FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.social}>
					<a
						href='https://github.com/DKMFZF'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className={styles.socialLink}
					>
						GitHub
					</a>
					<a
						href='https://vk.com/dkmfzf'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className={styles.socialLink}
					>
						VK
					</a>
					<a
						href='https://habr.com/ru/users/DKMFzF/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Twitter'
						className={styles.socialLink}
					>
						Habr
					</a>
					<a
						href='https://t.me/DKMFZF'
						aria-label='Email'
						className={styles.socialLink}
					>
						Tg
					</a>
				</div>
				<div className={styles.bottom}>
					<p>&copy; {currentYear} My portfolio</p>
				</div>
			</div>
		</footer>
	);
};
