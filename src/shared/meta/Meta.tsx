import { SEO } from './seo';
import { MetaInfo } from './MetaInfo';
import { FC } from 'react';
import { MetaProps } from './type';

export const Meta: FC<MetaProps> = ({
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
		<MetaInfo
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
