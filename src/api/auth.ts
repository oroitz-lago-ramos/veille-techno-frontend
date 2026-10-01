import { request, setToken } from "./client";
import type { Credentials, RegisterPayload, User } from "@/types";

export async function login(credentials: Credentials): Promise<void> {
  const { accessToken } = await request<{ accessToken: string }>(
    "/auth/login",
    { method: "POST", body: credentials },
  );
  setToken(accessToken);
}

export function register(payload: RegisterPayload): Promise<User> {
  return request<User>("/auth/register", { method: "POST", body: payload });
}

export function getMe(): Promise<User> {
  return request<User>("/users/me");
}

export function logout(): void {
  setToken(null);
}
