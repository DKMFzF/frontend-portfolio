import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaHeadInfoProps } from './type';

export const MetaHeadInfo: FC<MetaHeadInfoProps> = ({
	title,
	description,
	name,
	type,
	googleVerificationCode,
	keywords,
	lang
}) => (
	<Helmet htmlAttributes={{ lang }}>
		{/* Open Graph */}
		<meta property='og:type' content={type} />
		<meta property='og:title' content={title} />
		<meta
			property='og:description'
			content={description[lang ? lang : 'en']}
		/>

		{/* Twitter Cards */}
		<meta name='twitter:creator' content={name} />
		<meta name='twitter:card' content={type} />
		<meta name='twitter:title' content={title} />
		<meta
			name='twitter:description'
			content={description[lang ? lang : 'en']}
		/>

		{/* Favicons */}
		<link rel='preload' href='/favicon.ico' as='image' />
		<link rel='icon' href='/favicon.ico' sizes='any' />
		<link rel='icon' href='favicon.png' type='image/svg+xml' />
		<link rel='apple-touch-icon' href='/apple-touch-icon.png' />

		{/* base SEO */}
		<meta name='author' content={name} />
		<meta name='description' content={description[lang ? lang : 'en']} />
		<meta name='robots' content='index, follow' />
		<meta name='keywords' content={keywords} />
		{googleVerificationCode && (
			<meta
				name='google-site-verification'
				content={googleVerificationCode}
			/>
		)}
		<script type='application/ld+json'>
			{`
			{
				"@context": "https://schema.org",
				"@type": "Person",
				"name": "${name}",
				"url": "https://dkmfzf.github.io/frontend-portfolio/",
				"description": "${description}"
			}
		`}
		</script>

		{/* Canonical link */}
		<link
			rel='canonical'
			href='https://dkmfzf.github.io/frontend-portfolio/'
		/>
	</Helmet>
);
