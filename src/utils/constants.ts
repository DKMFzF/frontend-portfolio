export const SeoData = {
	title: {
		default: '{ dkmfzf }',
		aboutMe: '{ dkmfzf/AboutMe }',
		portfolio: {
			portfolioWithApproval: '{ dkmfzf/Portfolio }',
			portfolioWithNotApproval: '{ dkmfzf/Open on PC?? }'
		},
		notFound: '{ dkmfzf/notFound??? }'
	},
	description: 'Portfolio of the Siberian programmer',
	name: 'DKMFZF Frontend portfolio',
	type: 'website'
};

export const links = {
	email: 'dorohev.kir@gmail.com',
	github: 'https://github.com/DKMFZF',
	telegram: 'https://t.me/DKMFZF'
};

export interface KnowledgeCard {
	id: number;
	title: string;
	content: string;
}

export const knowledgeCards: KnowledgeCard[] = [
	{
		id: 1,
		title: 'React',
		content:
			'Experience in SPA development. I work confidently with hooks, components, and routing.'
	},
	{
		id: 2,
		title: 'JS/TS',
		content:
			'Strong command of JavaScript/ TypeScript, Redux. I can tell you what undefined is!'
	},
	{
		id: 3,
		title: 'HTML',
		content:
			'I know HTML at an advanced level. I own DevTools tools and understand how the CRP works.'
	},
	{
		id: 4,
		title: 'CSS',
		content: 'I am well versed in CSS and SASS/SCSS preprocessors.'
	},
	{
		id: 5,
		title: 'Jest',
		content: 'I use it for unit and integration testing.'
	},
	{
		id: 6,
		title: 'Express',
		content:
			'I work with Node.js, Express. I confidently use PostgreSQL and Redis to build REST APIs and microservices.'
	},
	{
		id: 7,
		title: 'Docker',
		content:
			'I use Docker to containerize applications and organize microservice architecture.'
	},
	{
		id: 9,
		title: 'Redis',
		content: 'I have experience integrating Redis for caching.'
	}
];

export interface CardInfo {
	title: string;
	content: string;
	link: string;
}

export const portfolioCard: CardInfo[] = [
	{
		title: 'StellarBurger',
		content:
			'A website for making space burgers! React + Redux is used under the hood',
		link: 'https://github.com/DKMFzF/stellar-burgers.git'
	},
	{
		title: 'ToDoRun',
		content:
			'A creative website for taking notes. The site is developed on Django',
		link: 'https://github.com/DKMFzF/to-do-run-django'
	},
	{
		title: 'Lindenmayer System',
		content:
			'A website for generating a Pythagorean tree on canvas in pure TypeScript using a Clean Architecture',
		link: 'https://github.com/DKMFzF/lindenmayer-system-clean-architecture'
	},
	{
		title: 'Film',
		content:
			'A website for buying a movie ticket. A website in pure TS using event-oriented programming (MVC + EVENT)',
		link: 'https://github.com/DKMFzF/film-mvc-event'
	},
	{
		title: 'Quadracopter24',
		content:
			'A website for submitting an application for a quadcopter made in 24 hours at the hackathon. React + Redux',
		link: 'https://github.com/DKMFzF/Quadracopter24-service'
	},
	{
		title: 'Web-larek',
		content:
			'Website for the purchase of Internet of things. A website in pure TS using event-oriented programming (MVC + EVENT)',
		link: 'https://github.com/DKMFzF/web-larek-MVC.git'
	},
	{
		title: 'Tik-Talk',
		content:
			'A social network for programmers! The website is designed in Angular.',
		link: 'https://github.com/DKMFzF/tik-talk'
	},
	{
		title: 'Mesto',
		content: 'A website for publishing any places in Russia',
		link: 'https://github.com/DKMFzF/mesto-project-ff'
	},
	{
		title: 'Puzzle Animal Game',
		content:
			'This puzzle game is made using TS and on a clean architecture.',
		link: 'https://github.com/DKMFzF/puzzle-animal-game-clean-architecture'
	}
];
