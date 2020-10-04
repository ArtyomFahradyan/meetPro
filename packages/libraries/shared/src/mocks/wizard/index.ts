import { rest } from 'msw';
import { seed } from './seed';
import { resJson, internalError } from '../helpers';
import { constants } from '../../constants';
const API_URL = constants.API_URL;

const { EMBED } = seed();

export default [
  rest.get(API_URL + '/embed', () => {
    const embed = sessionStorage.getItem(EMBED);
    if (!embed) return internalError();

    return resJson({ data: JSON.parse(embed) });
  }),
  rest.post(API_URL + '/workspace', (req) => {
    if (!req.body) return internalError();

    return resJson({ data: req.body });
  })
];
