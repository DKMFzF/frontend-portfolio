import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

// добавляем API TextEncoder и TextDecoder в тестовую среду jest
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis extends {
	onmessage: any;
	TextDecoder: infer TextDecoder;
}
	? TextDecoder
	: typeof TextDecoder;
