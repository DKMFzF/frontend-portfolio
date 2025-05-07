import { FC } from 'react';

import { ReactComponent as EmailIcon } from '@images/email.svg';
import { ReactComponent as GitHubIcon } from '@images/githab.svg';
import { ReactComponent as TelegramIcon } from '@images/telegram.svg';

import { TIconUIProps } from './type';
import style from './Icon.module.scss';

/**
 * Accepts links for three components needed to group three links
 */
export const Icon: FC<TIconUIProps> = ({ links }) => {
	const icons = [
		links.email && {
			key: 'email',
			Component: EmailIcon,
			href: links.email
		},
		links.github && {
			key: 'github',
			Component: GitHubIcon,
			href: links.github
		},
		links.telegram && {
			key: 'telegram',
			Component: TelegramIcon,
			href: links.telegram
		}
	].filter(Boolean) as { key: string; Component: FC; href: string }[];

	return (
		<div style={{ display: 'flex', gap: '16px' }}>
			{icons.map(({ key, Component, href }) => (
				<a
					key={key}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					className={style.icon}
				>
					<Component />
				</a>
			))}
		</div>
	);
};
