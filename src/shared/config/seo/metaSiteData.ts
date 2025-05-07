type TLang = {
	en: string;
	ru: string;
};

type TTitlesPortfolio = {
	portfolioWithApproval: string;
	portfolioWithNotApproval: string;
};
type TTitles = {
	default: string;
	aboutMe: string;
	portfolio: TTitlesPortfolio;
	notFound: string;
};

type TMETA_SITE_DATA = {
	lang: TLang;
	titles: TTitles;
	keywords: string;
	description: TLang;
	name: string;
	type: string;
};

export const META_SITE_DATA: TMETA_SITE_DATA = {
	lang: {
		en: 'en',
		ru: 'ru'
	},
	titles: {
		default: '{ dkmfzf }',
		aboutMe: '{ dkmfzf/AboutMe }',
		portfolio: {
			portfolioWithApproval: '{ dkmfzf/Portfolio }',
			portfolioWithNotApproval: '{ dkmfzf/Open on PC?? }'
		},
		notFound: '{ dkmfzf/notFound??? }'
	},
	keywords:
		'Frontend, React, JavaScript, Кирилл Дорошев, DKMFzF, Frontend Developer, Portfolio',
	description: {
		en: "Developer Kirill Doroshev's portfolio. React projects, experience, skills, contact information.",
		ru: 'Портфолио разработчика Кирилла Дорошева. Проекты на React, опыт, навыки, контактная информация.'
	},
	name: 'DKMFZF',
	type: 'website'
};
