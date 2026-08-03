import axios from "axios";

import { env } from "@/config";
import { clearAuthStorage, getAccessToken } from "@/features/auth/utils/auth-storage";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
=========================================
REQUEST INTERCEPTOR
=========================================
*/

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();

    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

/*
=========================================
RESPONSE INTERCEPTOR
=========================================
*/

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAuthStorage();
    }

    return Promise.reject(error);
  },
);
