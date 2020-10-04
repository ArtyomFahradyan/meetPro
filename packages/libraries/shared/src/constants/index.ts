import validations from './validations';
import environments from './environments';
import api from './api';

const constants = { ...validations, ...environments, ...api };

export { constants };
