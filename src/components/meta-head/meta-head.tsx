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
	googleFlowAnalysis
}) => (
	<>
		<MetaHeadInfo
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
