import React, { useRef } from 'react';
import gsap from 'gsap';
import { CardsProjectProps } from './type';
import styles from './cards-project.module.scss';

export const CardsProjectUI: React.FC<CardsProjectProps> = ({
	cards,
	transformStyle
}) => {
	const cardRefs = useRef<Map<number, HTMLAnchorElement>>(new Map());

	return (
		<div
			className={styles.cardsWrapper}
			style={{ transform: transformStyle }}
		>
			{cards.map((card) => (
				<a
					key={card.id}
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
								y: -10,
								scale: 1.05,
								boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
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
								boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
								duration: 0.3,
								ease: 'power3.out'
							});
							el.style.zIndex = '1';
						}
					}}
					onMouseDown={(e) => e.stopPropagation()}
				>
					<h3>{card.title}</h3>
					<p>{card.content}</p>
				</a>
			))}
		</div>
	);
};
