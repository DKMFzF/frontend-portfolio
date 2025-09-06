import { App } from './app';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(<App />);
