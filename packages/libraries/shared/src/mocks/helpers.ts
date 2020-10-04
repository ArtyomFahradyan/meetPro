import { response, context } from 'msw';

function resJson(body: unknown, statusCode = 200) {
  return response(context.status(statusCode), context.delay(), context.json(body));
}

function internalError(statusText = 'Internal server error') {
  return response(context.status(500, statusText));
}

export { resJson, internalError };
