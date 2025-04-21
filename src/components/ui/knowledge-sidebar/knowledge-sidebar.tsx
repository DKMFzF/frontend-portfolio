import { FC, useState } from 'react';
import { knowledgeCards } from 'src/utils/constants';
import styles from './knowledge-sidebar.module.scss';

export const KnowledgeSidebarUI: FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [transitioning, setTransitioning] = useState(false);

	const handleNext = () => {
		if (transitioning) return;
		setTransitioning(true);
		setTimeout(() => {
			setCurrentIndex((prev) => (prev + 1) % knowledgeCards.length);
			setTransitioning(false);
		}, 300);
	};

	const handlePrev = () => {
		if (transitioning) return;
		setTransitioning(true);
		setTimeout(() => {
			setCurrentIndex((prev) =>
				prev === 0 ? knowledgeCards.length - 1 : prev - 1
			);
			setTransitioning(false);
		}, 300);
	};

	return (
		<article
			className={`${styles.knowledgeSidebar__stack} ${styles.knowledgeSidebar__block} ${styles.knowledgeSidebar__cards}`}
		>
			<div className={styles.knowledgeSidebar__stackWrapper}>
				<header className={` ${styles.knowledgeSidebar__subTitle}`}>
					<h2>my tech skills</h2>
				</header>

				<div className={styles.knowledgeSidebar}>
					<button
						onClick={handlePrev}
						className={styles.knowledgeSidebar__button}
						aria-label='Previous card'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M15 18L9 12L15 6'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>

					<div
						aria-live='polite'
						className={styles.knowledgeSidebar__content}
					>
						<div
							className={`${styles.knowledgeSidebar__card} ${
								transitioning ? styles.fadeOut : styles.fadeIn
							}`}
							key={knowledgeCards[currentIndex].id}
						>
							<span className={styles.knowledgeSidebar__skill}>
								{knowledgeCards[currentIndex].title}
							</span>
						</div>
					</div>

					<button
						onClick={handleNext}
						className={styles.knowledgeSidebar__button}
						aria-label='Next card'
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9 18L15 12L9 6'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>

				<footer
					aria-live='polite'
					className={styles.knowledgeSidebar__stackDiscription}
				>
					<span
						className={
							transitioning ? styles.fadeOut : styles.fadeIn
						}
					>
						{knowledgeCards[currentIndex].content}
					</span>
					<div className={styles.knowledgeSidebar__stackArrow}>
						-{'>'}
					</div>
				</footer>
			</div>
		</article>
	);
};
