import stellarburger from '@images/portfolioPorjectCards/stellarburger.png';
import lindenmayerSystem from '@images/portfolioPorjectCards/lindenmayerSystem.png';
import todorun from '@images/portfolioPorjectCards/todorun.png';
import film from '@images/portfolioPorjectCards/film.png';
import quadracopter from '@images/portfolioPorjectCards/quadracopter24.png';
import webLorek from '@images/portfolioPorjectCards/web-lorek.png';
import tikTalk from '@images/portfolioPorjectCards/tik-talk.png';
import mesto from '@images/portfolioPorjectCards/mesto.png';
import puzzleAnimalGame from '@images/portfolioPorjectCards/puzzle-animal-game.png';
import { TPortfolioCard } from './type';

const bgColor = 'rgb(29, 29, 29)';

export const portfolioCard: TPortfolioCard[] = [
	{
		logo: stellarburger,
		title: 'StellarBurger',
		link: 'https://github.com/DKMFzF/stellar-burgers.git',
		settingsView: {
			x: -200,
			y: -200,
			rotation: -10,
			bgColor
		}
	},
	{
		logo: lindenmayerSystem,
		title: 'Lindenmayer System',
		link: 'https://github.com/DKMFzF/lindenmayer-system-clean-architecture',
		settingsView: {
			x: 200,
			y: 200,
			rotation: 10,
			bgColor
		}
	},
	{
		logo: todorun,
		title: 'ToDoRun',
		link: 'https://github.com/DKMFzF/to-do-run-django',
		settingsView: {
			x: -400,
			y: 200,
			rotation: -10,
			bgColor
		}
	},
	{
		logo: film,
		link: 'https://github.com/DKMFzF/film-mvc-event',
		settingsView: {
			x: 400,
			y: -200,
			rotation: 10,
			bgColor
		}
	},
	{
		logo: quadracopter,
		title: 'Quadracopter24',
		link: 'https://github.com/DKMFzF/Quadracopter24-service',
		settingsView: {
			x: -900,
			y: -200,
			rotation: 0,
			bgColor
		}
	},
	{
		logo: webLorek,
		link: 'https://github.com/DKMFzF/web-larek-MVC.git',
		settingsView: {
			x: 900,
			y: 200,
			rotation: 0,
			bgColor
		}
	},
	{
		logo: tikTalk,
		link: 'https://github.com/DKMFzF/tik-talk',
		settingsView: {
			x: -1000,
			y: 200,
			rotation: 0,
			bgColor
		}
	},
	{
		logo: mesto,
		link: 'https://github.com/DKMFzF/mesto-project-ff',
		settingsView: {
			x: 1000,
			y: -200,
			rotation: 0,
			bgColor
		}
	},
	{
		logo: puzzleAnimalGame,
		title: 'Puzzle Animal Game',
		link: 'https://github.com/DKMFzF/puzzle-animal-game-clean-architecture',
		settingsView: {
			x: 500,
			y: -600,
			rotation: 0,
			bgColor
		}
	}
];
