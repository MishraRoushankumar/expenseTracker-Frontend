import { apiClient } from "@/lib";
import { AUTH_API, USERS_API } from "@/lib/api-endpoints";
import type { ApiResponse } from "@/types/api.types";

import type { AuthResult, LoginResult, UserProfile } from "../types/auth.api.types";

import type { LoginFormValues, RegisterFormValues } from "../types/auth.types";

export const login = async (data: LoginFormValues): Promise<LoginResult> => {
  const response = await apiClient.post<ApiResponse<LoginResult>>(AUTH_API.LOGIN, data);

  return response.data.data;
};

export const register = async (data: RegisterFormValues): Promise<AuthResult> => {
  const response = await apiClient.post<ApiResponse<AuthResult>>(AUTH_API.REGISTER, data);

  return response.data.data;
};

export const logout = async (): Promise<AuthResult> => {
  const response = await apiClient.post<ApiResponse<AuthResult>>(AUTH_API.LOGOUT);

  return response.data.data;
};

export const getProfile = async (): Promise<UserProfile> => {
  const response = await apiClient.get<ApiResponse<UserProfile>>(USERS_API.PROFILE);

  return response.data.data;
};
