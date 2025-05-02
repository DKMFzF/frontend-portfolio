import { FC } from 'react';
import { CommonPageUI } from '@ui/index';
import { TCommonPage } from './type';

export const CommonPage: FC<TCommonPage> = ({ pageStyles, children }) => (
	<CommonPageUI pageStyles={pageStyles}>{children}</CommonPageUI>
);
