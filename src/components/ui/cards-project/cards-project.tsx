import { useRef, FC } from 'react';
import gsap from 'gsap';
import { CardsProjectProps } from './type';
import styles from './cards-project.module.scss';

export const CardsProjectUI: FC<CardsProjectProps> = ({
	cards,
	transformStyle
}) => {
	const cardRefs = useRef<Map<number, HTMLAnchorElement>>(new Map());

	return (
		<ul
			className={styles['cards-wrapper']}
			style={{ transform: transformStyle }}
		>
			{cards.map((card) => (
				<li key={card.id} className={styles.cards__element}>
					<a
						target='_blank'
						ref={(el) => el && cardRefs.current.set(card.id, el)}
						href={card.link}
						className={styles.card}
						style={{
							left: `${card.x}px`,
							top: `${card.y}px`,
							transform: `rotate(${card.rotation}deg)`
						}}
						onMouseEnter={() => {
							const el = cardRefs.current.get(card.id);
							if (el) {
								gsap.to(el, {
									y: -15,
									scale: 1.07,
									boxShadow: '0 15px 25px rgba(0,0,0,0.2)',
									duration: 0.3,
									ease: 'power3.out'
								});
								el.style.zIndex = '2';
							}
						}}
						onMouseLeave={() => {
							const el = cardRefs.current.get(card.id);
							if (el) {
								gsap.to(el, {
									y: 0,
									scale: 1,
									boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
									duration: 0.3,
									ease: 'power3.out'
								});
								el.style.zIndex = '1';
							}
						}}
						onMouseDown={(e) => e.stopPropagation()}
					>
						<div className={styles['card__title-container']}>
							<h3 className={styles.card__title}>{card.title}</h3>
						</div>
						<div className={styles['card__discription-container']}>
							<p className={styles.card__discription}>
								{card.content}
							</p>
							<span className={styles.card__btn}>{'>'}</span>
						</div>
					</a>
				</li>
			))}
		</ul>
	);
};
