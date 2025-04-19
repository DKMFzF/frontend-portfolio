import { FC } from 'react';
import { IconUI } from '../ui';
import { TIconProps } from './type';

export const Icon: FC<TIconProps> = ({ links }) => <IconUI links={links} />;
