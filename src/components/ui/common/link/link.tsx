import { FC } from 'react';
import { TLinkUIProps } from './type';
import styles from './link.module.scss';

export const LinkUI: FC<TLinkUIProps> = ({ link, text }) => (
	<a href={link} className={styles.link}>
		{text}
	</a>
);
