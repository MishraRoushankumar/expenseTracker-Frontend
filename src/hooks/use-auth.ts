"use client";

import { useProfile } from "@/features/auth";

export function useAuth() {
  const profileQuery = useProfile();

  return {
    user: profileQuery.data?.data ?? null,
    isAuthenticated: profileQuery.isSuccess,
    isLoading: profileQuery.isLoading,
    error: profileQuery.error,
  };
}
