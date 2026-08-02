import { AUTH_STORAGE_KEYS } from "../constants/auth.constants";

const isBrowser = () => typeof window !== "undefined";

export function setAccessToken(token: string): void {
  if (!isBrowser()) return;

  localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, token);
}

export function getAccessToken(): string | null {
  if (!isBrowser()) return null;

  return localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
}

export function removeAccessToken(): void {
  if (!isBrowser()) return;

  localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
}

export function clearAuthStorage(): void {
  removeAccessToken();
}
