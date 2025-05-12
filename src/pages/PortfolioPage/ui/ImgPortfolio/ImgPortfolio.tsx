import { type ImgPortfolioProps } from './type';
import commonPortfolioStyles from '../../styles/CommonPortfolio.module.scss';
import styles from './ImgPortfolio.module.scss';

export const ImgPortfolio = ({
	sourcImg,
	x,
	y,
	rotation
}: ImgPortfolioProps) => (
	<img
		src={sourcImg}
		alt=''
		className={`${commonPortfolioStyles['common-portfolio']} ${styles['logo-portfolio']}`}
		style={{
			top: `${x}px`,
			left: `${y}px`,
			rotate: `${rotation}deg`
		}}
	/>
);
