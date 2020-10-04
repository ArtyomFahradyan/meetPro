import { fetchWithRetry } from '../helpers';
import { constants } from '../constants';

const EMBED_ENDPOINT = constants.API_URL + '/embed';

function getEmbed() {
  return fetchWithRetry(EMBED_ENDPOINT);
}

export default { getEmbed };
