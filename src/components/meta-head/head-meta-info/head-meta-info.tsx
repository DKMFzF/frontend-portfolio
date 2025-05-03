import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaHeadInfoProps } from './type';

export const MetaHeadInfo: FC<MetaHeadInfoProps> = ({
	title,
	description,
	name,
	type
}) => (
	<Helmet>
		<meta name='description' content={description} />
		<meta property='og:type' content={type} />
		<meta property='og:title' content={title} />
		<meta property='og:description' content={description} />
		<meta name='twitter:creator' content={name} />
		<meta name='twitter:card' content={type} />
		<meta name='twitter:title' content={title} />
		<meta name='twitter:description' content={description} />
		<link rel='preload' href='/favicon.ico' as='image' />
		<link rel='icon' href='/favicon.ico' sizes='any' />
		<link rel='icon' href='favicon.png' type='image/svg+xml' />
		<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
	</Helmet>
);
