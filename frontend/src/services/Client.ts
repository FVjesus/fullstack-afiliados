export const API_URL = process.env.REACT_APP_API_URL;

const handleResponse = async (response: Response) => {
  if (response.status === 201 || response.status === 200) {
    const data = await response.json();
    return data;
  }

  if (response.status === 400) {
    throw response;
  }

  throw response.json();
};

const get = async <T>(path: string, params: Record<string, unknown> = {}): Promise<T> => {
  const url = new URL(`${API_URL}${path}`);
  Object.keys(params).forEach(key => url.searchParams.append(key, `${params[key]}`));

  const response = await fetch(url.toString(), {
    headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" }
  });

  return handleResponse(response);
};

const post = async <T>(path: string, body: FormData): Promise<T> => {
  const response = await fetch(`${API_URL}${path}`, {
    method: "POST",
    body: body
  });

  return handleResponse(response);
};

export const Client = { get, post };
