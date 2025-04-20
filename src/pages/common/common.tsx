import { FC } from 'react';
import { CommonPageUI } from 'src/components/ui';
import { TCommonPage } from './type';

export const CommonPage: FC<TCommonPage> = ({ pageStyles, children }) => (
	<CommonPageUI pageStyles={pageStyles}>{children}</CommonPageUI>
);
