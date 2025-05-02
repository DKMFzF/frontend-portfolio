import { setupServer } from 'msw/node';
import { handlers } from './handlers/handlers';

// start mock server test
export const server = setupServer(...handlers);
