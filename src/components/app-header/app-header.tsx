import { FC } from 'react';
import { AppHeaderUI } from '../ui';
import { links } from '@utils-constants';

export const AppHeader: FC = () => <AppHeaderUI links={links} />;
