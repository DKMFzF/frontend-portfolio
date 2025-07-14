import { FC } from 'react';
import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom';

export const Footer: FC = () => {
	const currentYear = new Date().getFullYear();

	const location = useLocation();

	const shouldApplyEmptyStyle = location.pathname === '/';
	const limitFooter = location.pathname === '/';
	const sketchPage = location.pathname.startsWith('/sketches/sketch');

	return (
		<footer
			className={`${styles.footer} ${
				shouldApplyEmptyStyle ? styles['footer--position-absolut'] : ''
			} ${limitFooter ? styles['footer--limit'] : ''}
				${sketchPage ? styles['footer--footer-fix'] : ''}`}
		>
			<div className={styles.footer__content}>
				<div
					className={`${styles.footer__item} ${styles.footer__social}`}
				>
					<a
						href='https://github.com/DKMFZF'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						className={styles['footer__social-link']}
					>
						GitHub
					</a>
					<a
						href='https://vk.com/dkmfzf'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='LinkedIn'
						className={styles['footer__social-link']}
					>
						VK
					</a>
					<a
						href='https://habr.com/ru/users/DKMFzF/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Twitter'
						className={styles['footer__social-link']}
					>
						Habr
					</a>
					<a
						href='https://t.me/DKMFZF'
						aria-label='Email'
						className={styles['footer__social-link']}
					>
						Tg
					</a>
				</div>
				<div
					className={`${styles.footer__item} ${styles.footer__bottom}`}
				>
					<span className={styles.footer__text}>VERSION 2.2.0</span>
					<p data-testid='years'>
						&copy; {currentYear} DKMFZF PORTFOLIO
					</p>
				</div>
			</div>
		</footer>
	);
};
