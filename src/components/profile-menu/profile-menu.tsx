import { FC } from 'react';
import { ProfileMenuUI } from '../ui';
import React from 'react';

export const ProfileMenu: FC<{ handleLogout: () => void }> = ({
	handleLogout
}) => <ProfileMenuUI handleLogout={handleLogout} />;
