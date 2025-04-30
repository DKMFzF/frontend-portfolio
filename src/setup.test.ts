import { beforeAll, afterEach, afterAll } from '@jest/globals';
import { server } from './mock/node';

// life mock-server

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
