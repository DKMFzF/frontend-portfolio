import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SeoData } from '@utils-constants';

export const NotFound404: FC = () => (
	<>
		<Helmet>
			<title>{SeoData.title.notFound}</title>
		</Helmet>
		<h3 className={`pb-6 text text_type_main-large`}>
			Страница не найдена. Ошибка 404.
		</h3>
	</>
);
