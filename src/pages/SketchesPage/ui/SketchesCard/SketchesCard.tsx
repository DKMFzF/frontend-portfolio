import { ReactComponent as GitHub } from '@images/githab.svg';
import { ReactComponent as ArrowLink } from '@images/arrow-cards.svg';
import { SketchesCardProps } from './type';
import { AnimatedNavLink } from '@ui';
import styles from './SketchesCard.module.scss';

export const SketchesCard = ({
	id,
	screenshot,
	title,
	tags,
	github
}: SketchesCardProps) => (
	<li className={styles.sketche__item}>
		<article className={styles.sketche__card}>
			<AnimatedNavLink to={id} styles={styles.sketche__link}>
				<div className={styles['sketche__card-img-wrapper']}>
					<img
						className={styles['sketche__card-img']}
						src={screenshot}
						alt={title}
						loading='lazy'
					/>
					<a href='#' className={styles['sketche__card-decor-arrow']}>
						<ArrowLink />
					</a>
					<a
						href={github}
						className={styles['sketche__card-link-code']}
					>
						<GitHub />
					</a>
				</div>
				<div className={styles['sketche__card-description']}>
					<div className={styles['sketche__card-tags']}>
						{tags.map((tag) => (
							<span className={styles.sketche__tag} key={tag}>
								{tag}
							</span>
						))}
					</div>
					<span className={styles['sketche__card-title']}>
						{title}
					</span>
				</div>
			</AnimatedNavLink>
		</article>
	</li>
);
