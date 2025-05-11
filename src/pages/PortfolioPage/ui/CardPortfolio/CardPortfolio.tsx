import { FC } from 'react';
import { useCardPortfolioHandlesMouse } from '../../model';
import { type CardPortfolioProps } from './type';
import styles from './CardPortfolio.module.scss';

export const CardPortfolio: FC<CardPortfolioProps> = ({
	logo,
	title,
	link,
	settingsView
}) => {
	const { cardRef, titleRef, handleMouseEnter, handleMouseLeave } =
		useCardPortfolioHandlesMouse();

	return (
		<li className={styles.cards__element}>
			<article>
				<a
					ref={cardRef}
					target='_blank'
					href={link}
					className={styles.card}
					style={{
						top: `${settingsView.y}px`,
						left: `${settingsView.x}px`,
						transform: `translate(-50%, -50%) rotate(${settingsView.rotation}deg)`,
						backgroundColor: settingsView.bgColor
					}}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<div className={styles['card__logo-wrapper']} style={{}}>
						<div
							className={styles['logo-bg']}
							style={{
								backgroundImage: `url(${logo})`
							}}
						/>
						<div
							className={styles['card__content-wrapper']}
							ref={titleRef}
						>
							{title ? (
								<div
									className={styles['card__title-container']}
								>
									<h3 className={styles.card__title}>
										{title}
									</h3>
								</div>
							) : null}
						</div>
					</div>
				</a>
			</article>
		</li>
	);
};
