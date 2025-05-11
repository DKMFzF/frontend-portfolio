import { FC } from 'react';
import { type CardsListProps } from './type';

export const CardsList: FC<CardsListProps> = ({ children }) => (
	<ul>{children}</ul>
);
