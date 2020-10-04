import { setupWorker } from 'msw';
import wizardHandlers from './wizard';

const mockWorker = setupWorker(...wizardHandlers);

export { mockWorker };
