import { FC } from 'react';
import { TSectionContainerProps } from './type';

export const SectionContainer: FC<TSectionContainerProps> = ({
	id,
	children
}) => <section id={id}>{children}</section>;
