import { useRef, FC } from 'react';
import gsap from 'gsap';
import { InteractiveBoardProps } from './type';
import styles from './InteractiveBoard.module.scss';

export const InteractiveBoard: FC<InteractiveBoardProps> = ({
	cards,
	transformStyle
}) => {
	const cardRefs = useRef<Map<number, HTMLAnchorElement>>(new Map());
	const contentWrapper = useRef<Map<number, HTMLDivElement>>(new Map());

	return (
		<ul
			className={styles['cards-wrapper']}
			style={{ transform: transformStyle }}
		>
			{cards.map((card) => (
				<li key={card.id} className={styles.cards__element}>
					<article>
						<a
							target='_blank'
							ref={(el) =>
								el && cardRefs.current.set(card.id, el)
							}
							href={card.link}
							className={styles.card}
							style={{
								top: `${card.settingsView.y}px`,
								left: `${card.settingsView.x}px`,
								transform: `translate(-50%, -50%) rotate(${card.settingsView.rotation}deg)`,
								backgroundColor: card.settingsView.bgColor
							}}
							onMouseEnter={() => {
								const el = cardRefs.current.get(card.id);
								const contentContainer =
									contentWrapper.current.get(card.id);

								if (el) {
									gsap.to(el, {
										scale: 1.07,
										boxShadow: '0 0 25px rgba(0,0,0,0.2)',
										duration: 0.3,
										ease: 'power3.out'
									});
									el.style.zIndex = '2';
								}

								if (contentContainer) {
									gsap.to(contentContainer, {
										x: 0,
										duration: 0.5,
										ease: 'power3.out'
									});
								}
							}}
							onMouseLeave={() => {
								const el = cardRefs.current.get(card.id);
								const contentContainer =
									contentWrapper.current.get(card.id);

								if (el) {
									gsap.to(el, {
										scale: 1,
										boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
										duration: 0.3,
										ease: 'power1.out'
									});
									el.style.zIndex = '1';
								}

								if (contentContainer) {
									gsap.to(contentContainer, {
										x: '-100%',
										duration: 0.5,
										ease: 'power3.in'
									});
								}
							}}
							onMouseDown={(e) => e.stopPropagation()}
						>
							<div
								className={styles['card__logo-wrapper']}
								style={{}}
							>
								<div
									className={styles['logo-bg']}
									style={{
										backgroundImage: `url(${card.logo})`
									}}
								/>
								<div
									ref={(el) =>
										el &&
										contentWrapper.current.set(card.id, el)
									}
									className={styles['card__content-wrapper']}
								>
									<div
										className={
											styles['card__title-container']
										}
									>
										<h3 className={styles.card__title}>
											{card.title}
										</h3>
									</div>
								</div>
							</div>
						</a>
					</article>
				</li>
			))}
		</ul>
	);
};
