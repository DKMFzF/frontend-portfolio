import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis extends {
	onmessage: any;
	TextDecoder: infer TextDecoder;
}
	? TextDecoder
	: typeof TextDecoder;
