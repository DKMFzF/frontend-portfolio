import { FC } from 'react';
import { AnimatedNavLink } from '@ui';
import { useMobileMenu } from '../../model';
import { useMetrika } from '@lib';
import resumeFile from '../../../../../public/kirill-doroshev-resume.pdf';
import styles from './Header.module.scss';
import { useLocation } from 'react-router-dom';

// TODO: Распил компонента
// TODO: Выделить данные с хуков в пропсы и кинуть на уровень выше

export const Header: FC = () => {
	const {
		isMobileMenuOpen,
		menuRef,
		mobileMenuContentRef,
		overlayRef,
		toggleMenu,
		closeMenu
	} = useMobileMenu();

	const location = useLocation();

	const shouldApplyEmptyStyle =
		location.pathname === '/portfolio' ||
		location.pathname.startsWith('/sketches/');

	const { ym, gtag } = useMetrika();

	return (
		<header className={styles.header}>
			<div
				className={`${styles['header__container-default']}
				${shouldApplyEmptyStyle ? '' : styles.header__container}
			`}
			>
				<div className={styles['header__inside-wrapper']}>
					<div className={styles.header__brand}>
						<AnimatedNavLink
							to='/'
							styles={styles.header__link}
							data-text='portfolio'
							data-cy='link-portfolio'
						>
							portfolio
						</AnimatedNavLink>
					</div>

					<nav className={styles.header__nav}>
						<ul className={styles.header__menu}>
							<li className={styles.header__menuItem}>
								<AnimatedNavLink
									to='/'
									styles={styles.header__link}
								>
									about Me
								</AnimatedNavLink>
							</li>
							<li className={styles.header__menuItem}>
								<AnimatedNavLink
									to='/sketches'
									styles={styles.header__link}
								>
									sketches
								</AnimatedNavLink>
							</li>
							<li className={styles['header__menu-item']}>
								<AnimatedNavLink
									to='/portfolio'
									styles={styles.header__link}
									data-cy='link-portfolio'
								>
									portfolio
								</AnimatedNavLink>
							</li>
							<li className={styles['header__menu-item']}>
								<a
									href={resumeFile}
									download='kirill-doroshev-resume.pdf'
									className={styles.header__link}
									// SEO Analysis
									onClick={() => {
										ym('reachGoal', 'download-resume');
										gtag('event', 'file_download', {
											event_name: 'file_download'
										});
									}}
								>
									download resume
								</a>
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
									<AnimatedNavLink
										to='/'
										styles={styles.header__link}
										onClick={closeMenu}
									>
										About Me
									</AnimatedNavLink>

									<AnimatedNavLink
										to='/sketches'
										styles={styles.header__link}
										onClick={closeMenu}
									>
										sketches
									</AnimatedNavLink>

									<AnimatedNavLink
										to='/portfolio'
										styles={styles.header__link}
										onClick={() => closeMenu()}
										data-cy='link-portfolio'
									>
										portfolio
									</AnimatedNavLink>

									<a
										href={resumeFile}
										download='kirill-doroshev-resume.pdf'
										className={styles.header__link}
										onClick={() => {
											ym('reachGoal', 'download-resume');
											gtag('event', 'file_download', {
												event_name: 'file_download'
											});
											closeMenu();
										}}
									>
										download resume
									</a>
								</nav>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};
