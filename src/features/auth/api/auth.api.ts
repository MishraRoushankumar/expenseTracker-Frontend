import { apiClient } from "@/lib";
import { AUTH_API, USERS_API } from "@/lib/api-endpoints";
import type { ApiResponse } from "@/types/api.types";

import type { AuthResult, LoginResult, UserProfile } from "../types/auth.api.types";

import type { LoginFormValues, RegisterFormValues } from "../types/auth.types";
import { unwrapApiResponse } from "@/lib/api-response";

export const login = async (data: LoginFormValues): Promise<LoginResult> => {
  const response = await apiClient.post<ApiResponse<LoginResult>>(AUTH_API.LOGIN, data);

  return unwrapApiResponse(response);
};

export const register = async (data: RegisterFormValues): Promise<AuthResult> => {
  const response = await apiClient.post<ApiResponse<AuthResult>>(AUTH_API.REGISTER, data);

  return unwrapApiResponse(response);
};

export const logout = async (): Promise<AuthResult> => {
  const response = await apiClient.post<ApiResponse<AuthResult>>(AUTH_API.LOGOUT);

  return unwrapApiResponse(response);
};

export const getProfile = async (): Promise<UserProfile> => {
  const response = await apiClient.get<ApiResponse<UserProfile>>(USERS_API.PROFILE);

  return unwrapApiResponse(response);
};
