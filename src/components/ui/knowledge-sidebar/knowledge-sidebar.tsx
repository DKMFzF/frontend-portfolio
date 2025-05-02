import { FC } from 'react';
import { knowledgeCards } from '@utils-constants';
import styles from './knowledge-sidebar.module.scss';
import { useCardSlider } from '@hooks';

export const KnowledgeSidebarUI: FC = () => {
	const { currentIndex, transitioning, handleNext, handlePrev } =
		useCardSlider(knowledgeCards.length);

	return (
		<div className={styles['knowledge-sidebar']}>
			<div className={styles['knowledge-sidebar__body-slider']}>
				<button
					onClick={handlePrev}
					className={styles['knowledge-sidebar__button']}
					aria-label='Previous card'
					data-cy='card-btn-left'
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
					className={styles['knowledge-sidebar__content']}
				>
					<div
						className={`${styles['knowledge-sidebar__card']} ${
							transitioning
								? styles['fade-out']
								: styles['fade-in']
						}`}
						key={knowledgeCards[currentIndex].id}
					>
						<span
							className={styles['knowledge-sidebar__skill']}
							data-cy='card-title'
						>
							{knowledgeCards[currentIndex].title}
						</span>
					</div>
				</div>

				<button
					onClick={handleNext}
					className={styles['knowledge-sidebar__button']}
					aria-label='Next card'
					data-cy='card-btn-right'
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
				className={styles['knowledge-sidebar__stack-discription']}
			>
				<span
					className={
						transitioning ? styles['fade-out'] : styles['fade-in']
					}
				>
					{knowledgeCards[currentIndex].content}
				</span>
				<div className={styles['knowledge-sidebar__stack-arrow']}>
					{'>'}
				</div>
			</footer>
		</div>
	);
};
