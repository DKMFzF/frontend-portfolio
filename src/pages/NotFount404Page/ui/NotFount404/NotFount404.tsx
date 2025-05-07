import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { META_SITE_DATA } from '@config';

export const NotFound404Page: FC = () => (
	<>
		<Helmet>
			<title>{META_SITE_DATA.titles.notFound}</title>
		</Helmet>
		<h3 className={`pb-6 text text_type_main-large`}>
			Страница не найдена. Ошибка 404.
		</h3>
	</>
);
