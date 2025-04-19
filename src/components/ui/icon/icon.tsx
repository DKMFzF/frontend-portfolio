import { FC } from 'react';
import { TIconProps } from './type';
import { ReactComponent as EmailIcon } from '@images/email.svg';
import { ReactComponent as GitHubIcon } from '@images/githab.svg';
import { ReactComponent as TelegramIcon } from '@images/telegram.svg';

export const Icon: FC<TIconProps> = ({ links }) => {
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
				>
					<Component />
				</a>
			))}
		</div>
	);
};
