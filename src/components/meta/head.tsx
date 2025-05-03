import { SEO } from './seo/index';
import { HeadMetaInfo } from './head-meta-info';
import { FC } from 'react';
import { HeadProps } from './type';

export const Head: FC<HeadProps> = ({
	title,
	description,
	name,
	type,
	yandexIdMetrika,
	googleFlowAnalysis
}) => (
	<>
		<HeadMetaInfo
			title={title}
			description={description}
			name={name}
			type={type}
		/>
		<SEO
			yandexIdMetrika={yandexIdMetrika}
			googleFlowAnalysis={googleFlowAnalysis}
		/>
	</>
);
