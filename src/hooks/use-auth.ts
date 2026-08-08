"use client";

import { useLogout, useProfile } from "@/features/auth";

export function useAuth() {
  const profileQuery = useProfile();
  const logoutMutation = useLogout();

  return {
    user: profileQuery.data ?? null,
    isAuthenticated: profileQuery.isSuccess,
    isLoading: profileQuery.isLoading,
    error: profileQuery.error,

    logout: logoutMutation.mutateAsync,
    isLoggingOut: logoutMutation.isPending,
  };
}
