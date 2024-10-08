import { useState } from 'react';

// Utility function to convert object to query string
function objectToQueryString(obj: Record<string, any>): string {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (Array.isArray(value)) {
        params.append(key, value.join(','));
      } else {
        params.append(key, String(value));
      }
    }
  });
  return params.toString();
}

function replaceUrlParams(url: string, body: Record<string, any>): [string, Record<string, any>] {
  const urlParams = url.match(/:(\w+)/g) || [];
  let updatedUrl = url;
  const updatedBody = { ...body };

  urlParams.forEach((param) => {
    const key = param.slice(1); // Remove the leading ':'
    if (key in body) {
      updatedUrl = updatedUrl.replace(param, encodeURIComponent(String(body[key])));
      delete updatedBody[key];
    } else {
      throw new Error(`Missing required URL parameter: ${key}`);
    }
  });

  return [updatedUrl, updatedBody];
}

export function useQuery<ResponseType, BodyType = any>(method: string, url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);
  const authToken = null;

  const executeQuery = async (body?: BodyType): Promise<ResponseType> => {
    try {
      setLoading(true);
      setError(null);

      let queryUrl = url;
      let queryBody: Record<string, any> | undefined = body as Record<string, any> | undefined;

      // Replace URL parameters and update body
      if (queryBody) {
        [queryUrl, queryBody] = replaceUrlParams(queryUrl, queryBody);
      }

      // If method is GET/DELETE and body is provided, convert it to query params
      if (['GET', 'DELETE'].includes(method.toUpperCase()) && queryBody) {
        queryUrl += `?${objectToQueryString(queryBody)}`;
        queryBody = undefined;
      }

      const { response, status } = await makeQuery({
        authToken,
        url: queryUrl,
        method,
        body: queryBody,
      });

      if (status >= 400) {
        throw new Error(response?.error || 'An error occurred');
      }

      return response as ResponseType;
    } catch (e: any) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return {
    execute: executeQuery,
    loading,
    error,
  };
}

export async function makeQuery({
  authToken,
  url,
  method = 'GET',
  body: paramBody,
}: {
  authToken: string | null;
  url: string;
  method?: string;
  body?: any;
}) {
  const body = paramBody ? JSON.stringify(paramBody) : null;
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken ? `Bearer ${authToken}` : '',
    },
    body,
  });
  const response = res.status === 204 ? null : await res.json();
  return {
    response,
    status: res.status,
  };
}
