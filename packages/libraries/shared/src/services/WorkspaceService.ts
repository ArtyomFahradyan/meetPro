import { fetchWithRetry } from '../helpers';
import { constants } from '../constants';
const WORKSPACE_ENDPOINT = constants.API_URL + '/workspace';

type workspaceType = {
  color: string;
  name: string;
  pattern: string;
  gender: string;
  defaultLanguage: string;
};

async function createWorkspace(workspace: workspaceType) {
  return await fetchWithRetry(WORKSPACE_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(workspace)
  });
}

export default { createWorkspace };
