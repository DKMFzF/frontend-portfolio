import { SEO } from './seo';
import { MetaHeadInfo } from './head-meta-info';
import { FC } from 'react';
import { MetaHeadProps } from './type';

export const MetaHead: FC<MetaHeadProps> = ({
	title,
	description,
	name,
	type,
	yandexIdMetrika,
	googleFlowAnalysis,
	googleVerificationCode,
	keywords,
	lang
}) => (
	<>
		<MetaHeadInfo
			lang={lang}
			title={title}
			description={description}
			keywords={keywords}
			name={name}
			type={type}
			googleVerificationCode={googleVerificationCode}
		/>
		<SEO
			yandexIdMetrika={yandexIdMetrika}
			googleFlowAnalysis={googleFlowAnalysis}
		/>
	</>
);
