import { FC } from 'react';
import { knowledgeCards } from 'src/utils/constants';
import styles from './knowledge-sidebar.module.scss';
import { useCardSlider } from '@hooks';

export const KnowledgeSidebarUI: FC = () => {
	const { currentIndex, transitioning, handleNext, handlePrev } =
		useCardSlider(knowledgeCards.length);

	return (
		<div className={styles.knowledgeSidebar}>
			<div className={styles.knowledgeSidebar__bodySlider}>
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
					className={transitioning ? styles.fadeOut : styles.fadeIn}
				>
					{knowledgeCards[currentIndex].content}
				</span>
				<div className={styles.knowledgeSidebar__stackArrow}>
					-{'>'}
				</div>
			</footer>
		</div>
	);
};
