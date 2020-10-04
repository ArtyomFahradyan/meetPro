async function fetchWithRetry(
  url: string,
  options: RequestInit = { method: 'GET' },
  retryCount = 4,
  retryDelay = 2000
): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw response;

    return response;
  } catch (error) {
    if (retryCount === 0) throw error;
    await new Promise((r) => setTimeout(r, retryDelay));
    return await fetchWithRetry(url, options, retryCount - 1);
  }
}

export default fetchWithRetry;
