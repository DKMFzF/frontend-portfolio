import { FC } from 'react';
import { LinkUI } from '../ui';
import { TLinkProps } from './type';

export const LinkCUS: FC<TLinkProps> = ({ link, text }) => (
	<LinkUI link={link} text={text} />
);
