export interface AuthResponse {
  success: boolean;
  message: string;
}

export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse extends AuthResponse {
  data: {
    accessToken: string;
  };
}

export interface ProfileResponse extends AuthResponse {
  data: UserProfile;
}
