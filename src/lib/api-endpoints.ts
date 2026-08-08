export const AUTH_API = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
} as const;

export const USERS_API = {
  PROFILE: "/users/profile",
} as const;

export const DASHBOARD_API = {
  DASHBOARD: {
    ROOT: "/dashboard",
  },
} as const;
