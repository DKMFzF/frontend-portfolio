import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';

// added api text-encoder and text-decoder in testing environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof globalThis extends {
	onmessage: any;
	TextDecoder: infer TextDecoder;
}
	? TextDecoder
	: typeof TextDecoder;
