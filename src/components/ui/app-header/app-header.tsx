import { FC } from 'react';
import { TAppHeaderUIProps } from './type';
import { Icon } from '@components';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '@hooks';
import resumeFile from '../../../../public/kirill-doroshev-resume.pdf';
import styles from './app-header.module.scss';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ links }) => {
	const {
		isMobileMenuOpen,
		menuRef,
		mobileMenuContentRef,
		overlayRef,
		toggleMenu,
		closeMenu
	} = useMobileMenu();

	return (
		<header className={styles.header}>
			<div className={styles.header__container}>
				<div className={styles['header__inside-wrapper']}>
					<div className={styles.header__brand}>
						<Link
							to='/'
							className={styles.header__logo}
							data-text='portfolio'
							data-cy='link-portfolio'
						>
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
							<li className={styles['header__menu-item']}>
								<Link
									to='/portfolio'
									className={styles.header__link}
								>
									portfolio
								</Link>
							</li>
							<li className={styles['header__menu-item']}>
								<a
									href={resumeFile}
									download='kirill-doroshev-resume.pdf'
									className={styles.header__link}
								>
									download resume
								</a>
							</li>
							<li className={styles['header__menu-item']}>
								<div className={styles.header__icons}>
									<Icon links={links} />
								</div>
							</li>
						</ul>
					</nav>

					<div
						className={styles['header__mobile-menu']}
						ref={menuRef}
					>
						<button
							className={styles['header__burger-button']}
							onClick={toggleMenu}
						>
							☰
						</button>

						{isMobileMenuOpen && (
							<>
								<div
									className={styles.header__overlay}
									ref={overlayRef}
									onClick={closeMenu}
								/>
								<nav
									className={
										styles['header__mobile-menu-content']
									}
									ref={mobileMenuContentRef}
								>
									<Link
										to='/'
										className={styles.header__link}
										onClick={closeMenu}
									>
										About Me
									</Link>
									<Link
										to='/portfolio'
										className={styles.header__link}
										onClick={closeMenu}
									>
										portfolio
									</Link>
									<a
										href={resumeFile}
										download='kirill-doroshev-resume.pdf'
										className={styles.header__link}
										onClick={closeMenu}
									>
										download resume
									</a>
									<div className={styles.header__icons}>
										<Icon links={links} />
									</div>
								</nav>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
