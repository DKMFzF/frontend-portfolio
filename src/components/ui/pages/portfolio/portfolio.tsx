import React, { FC, useRef, useState, useEffect } from 'react';

interface Card {
	id: number;
	title: string;
	content: string;
	link: string;
	x: number;
	y: number;
	rotation: number;
	width: number;
	height: number;
}

export const PortfolioPageUI: FC = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [startPos, setStartPos] = useState({ x: 0, y: 0 });
	const containerRef = useRef<HTMLDivElement>(null);

	// Размеры карточки
	const CARD_WIDTH = 250;
	const CARD_HEIGHT = 180;
	const CARD_PADDING = 20;

	// Функция для генерации случайного числа в диапазоне
	const getRandom = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	// Проверка пересечения двух карточек
	const checkCollision = (card1: Card, card2: Card) =>
		card1.x < card2.x + card2.width &&
		card1.x + card1.width > card2.x &&
		card1.y < card2.y + card2.height &&
		card1.y + card1.height > card2.y;

	// Генерация позиций без пересечений
	const generateNonOverlappingCards = () => {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const newCards: Card[] = [];
		const maxAttempts = 100; // Максимальное количество попыток для каждой карточки

		const baseCards = [
			{
				id: 1,
				title: 'Карточка 1',
				content: 'Содержимое карточки 1',
				link: '#card1'
			},
			{
				id: 2,
				title: 'Карточка 2',
				content: 'Содержимое карточки 2',
				link: '#card2'
			},
			{
				id: 3,
				title: 'Карточка 3',
				content: 'Содержимое карточки 3',
				link: '#card3'
			},
			{
				id: 4,
				title: 'Карточка 4',
				content: 'Содержимое карточки 4',
				link: '#card4'
			},
			{
				id: 5,
				title: 'Карточка 5',
				content: 'Содержимое карточки 5',
				link: '#card5'
			},
			{
				id: 6,
				title: 'Карточка 6',
				content: 'Содержимое карточки 6',
				link: '#card6'
			},
			{
				id: 7,
				title: 'Карточка 7',
				content: 'Содержимое карточки 7',
				link: '#card7'
			},
			{
				id: 8,
				title: 'Карточка 8',
				content: 'Содержимое карточки 8',
				link: '#card8'
			}
		];

		for (const baseCard of baseCards) {
			let attempts = 0;
			let card: Card;
			let hasCollision: boolean;

			do {
				hasCollision = false;
				card = {
					...baseCard,
					x: getRandom(0, viewportWidth - CARD_WIDTH),
					y: getRandom(0, viewportHeight - CARD_HEIGHT),
					rotation: getRandom(-5, 5),
					width: CARD_WIDTH,
					height: CARD_HEIGHT
				};

				// Проверяем пересечение с уже размещенными карточками
				for (const placedCard of newCards) {
					if (checkCollision(card, placedCard)) {
						hasCollision = true;
						break;
					}
				}

				attempts++;
				if (attempts >= maxAttempts) {
					// Если не удалось найти позицию без пересечений, размещаем как есть
					hasCollision = false;
				}
			} while (hasCollision);

			newCards.push(card);
		}

		return newCards;
	};

	// Инициализация карточек без пересечений
	const [cards, setCards] = useState<Card[]>(() =>
		generateNonOverlappingCards()
	);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (
			e.target === e.currentTarget ||
			!(e.target as HTMLElement).closest('a')
		) {
			setIsDragging(true);
			setStartPos({
				x: e.clientX - position.x,
				y: e.clientY - position.y
			});
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging) {
			setPosition({
				x: e.clientX - startPos.x,
				y: e.clientY - startPos.y
			});
		}
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleMouseUp);
		} else {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		};
	}, [isDragging, startPos]);

	// Стили для карточек
	const cardStyle: React.CSSProperties = {
		display: 'block',
		position: 'absolute',
		width: `${CARD_WIDTH}px`,
		height: `${CARD_HEIGHT}px`,
		padding: `${CARD_PADDING}px`,
		backgroundColor: '#fff',
		borderRadius: '8px',
		boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
		textDecoration: 'none',
		color: '#333',
		transition: 'transform 0.2s, box-shadow 0.2s',
		cursor: 'pointer',
		zIndex: 1
	};

	return (
		<div
			style={{
				width: '100vw',
				height: '85vh',
				overflow: 'hidden',
				position: 'relative',
				cursor: isDragging ? 'grabbing' : 'grab',
				backgroundColor: '#f5f5f5'
			}}
			onMouseDown={handleMouseDown}
		>
			<div
				ref={containerRef}
				style={{
					position: 'absolute',
					userSelect: 'none',
					transform: `translate(${position.x}px, ${position.y}px)`,
					willChange: 'transform'
				}}
			>
				{cards.map((card) => (
					<a
						key={card.id}
						href={card.link}
						style={{
							...cardStyle,
							left: `${card.x}px`,
							top: `${card.y}px`,
							transform: `rotate(${card.rotation}deg)`,
							pointerEvents: isDragging ? 'none' : 'auto'
						}}
						onMouseEnter={(e) => {
							const target = e.currentTarget;
							target.style.transform = `rotate(${card.rotation}deg) translateY(-5px)`;
							target.style.boxShadow =
								'0 5px 15px rgba(0,0,0,0.2)';
							target.style.zIndex = '2';
						}}
						onMouseLeave={(e) => {
							const target = e.currentTarget;
							target.style.transform = `rotate(${card.rotation}deg)`;
							target.style.boxShadow =
								'0 2px 10px rgba(0,0,0,0.1)';
							target.style.zIndex = '1';
						}}
						onMouseDown={(e: React.MouseEvent<HTMLAnchorElement>) =>
							e.stopPropagation()
						}
					>
						<h3>{card.title}</h3>
						<p>{card.content}</p>
					</a>
				))}
			</div>
		</div>
	);
};
