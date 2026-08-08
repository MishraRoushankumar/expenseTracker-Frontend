/*
==========================================
AUTH PAYLOAD TYPES
==========================================
*/

export interface AuthResult {
  message: string;
}

export interface LoginResult {
  accessToken: string;
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
