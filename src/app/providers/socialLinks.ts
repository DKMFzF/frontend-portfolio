import { createContext } from 'react';

type TSocialLinks = {
	email?: string;
	github?: string;
	telegram?: string;
};

export const SocialLinks = createContext<TSocialLinks>({});

SocialLinks.displayName = 'SocialLinks';
