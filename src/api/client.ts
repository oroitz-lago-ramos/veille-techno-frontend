const BASE_URL = "/api";

let token: string | null = null;

export function setToken(value: string | null) {
  token = value;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

export async function request<T>(
  path: string,
  options: { method?: string; body?: unknown } = {},
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const response = await fetch(BASE_URL + path, {
    method: options.method ?? "GET",
    headers,
    body: JSON.stringify(options.body),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    const message = Array.isArray(data?.message)
      ? data.message.join(", ")
      : (data?.message ?? response.statusText);
    throw new ApiError(response.status, message);
  }

  if (response.status === 204) return undefined as T;

  return response.json();
}
