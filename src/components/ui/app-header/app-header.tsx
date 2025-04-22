import { FC } from 'react';
import styles from './app-header.module.scss';
import { TAppHeaderUIProps } from './type';
import { Icon } from '@components';
import { Link } from 'react-router-dom';
import resumeFile from '../../../../public/kirill-doroshev-resume.pdf';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => (
	<header className={styles.header}>
		<div className={styles.header__container}>
			<div className={styles.header__insideWrapper}>
				<div className={styles.header__brand}>
					<Link to='/' className={styles.header__logo}>
						portfolio
					</Link>
				</div>

				<nav className={styles.header__nav}>
					<ul className={styles.header__menu}>
						<li className={styles.header__menuItem}>
							<Link to='/' className={styles.header__link}>
								About Me
							</Link>
						</li>
						<li className={styles.header__menuItem}>
							<Link
								to='/portfolio'
								className={styles.header__link}
							>
								portfolio
							</Link>
						</li>
						<li className={styles.header__menuItem}>
							<a
								href={resumeFile}
								download='kirill-doroshev-resume.pdf'
								className={styles.header__link}
							>
								download resume
							</a>
						</li>
						<li className={styles.header__menuItem}>
							<div className={styles.header__icons}>
								<Icon links={links} />
							</div>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
);
