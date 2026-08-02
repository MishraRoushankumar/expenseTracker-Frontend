import { apiClient } from "@/lib";
import { LoginFormValues, RegisterFormValues } from "../types/auth.types";
import { AUTH_API, USERS_API } from "@/lib/api-endpoints";
import { AuthResponse, LoginResponse, ProfileResponse } from "../types/auth.api.types";

export const login = async (data: LoginFormValues): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(AUTH_API.LOGIN, data);

  return response.data;
};

export const register = async (data: RegisterFormValues): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(AUTH_API.REGISTER, data);

  return response.data;
};

export const logout = async (): Promise<AuthResponse> => {
  const response = await apiClient.post<AuthResponse>(AUTH_API.LOGOUT);

  return response.data;
};

export const getProfile = async (): Promise<ProfileResponse> => {
  const response = await apiClient.get<ProfileResponse>(USERS_API.PROFILE);

  return response.data;
};
