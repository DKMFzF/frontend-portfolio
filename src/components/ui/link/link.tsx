import { FC } from 'react';
import { TLinkProps } from './type';
import styles from './link.module.scss';

export const LinkUI: FC<TLinkProps> = ({ link, text }) => (
	<a href={link} className={styles.link}>
		{text}
	</a>
);
