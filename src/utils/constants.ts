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
