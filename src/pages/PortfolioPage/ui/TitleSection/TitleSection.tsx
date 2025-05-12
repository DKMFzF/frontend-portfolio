import { TitleSectionProps } from './type';
import commonPortfolioStyles from '../../styles/CommonPortfolio.module.scss';
import styles from './TitleSection.module.scss';

export const TitleSection = ({
	content,
	x,
	y,
	rotation,
	fontSize
}: TitleSectionProps) => (
	<h2
		className={`${commonPortfolioStyles['common-portfolio']} ${styles['title-content']}`}
		style={{
			top: `${y}px`,
			left: `${x}px`,
			transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
			fontSize: `${fontSize}px`
		}}
	>
		{content}
	</h2>
);
