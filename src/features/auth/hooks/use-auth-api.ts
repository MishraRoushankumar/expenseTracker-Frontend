import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/lib/query-keys";

import { getProfile, login, logout, register } from "../api/auth.api";
import { getAccessToken, removeAccessToken, setAccessToken } from "../utils/auth-storage";

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,

    onSuccess: async (response) => {
      setAccessToken(response.data.accessToken);

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AUTH.PROFILE,
      });
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: register,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: () => {
      removeAccessToken();

      queryClient.clear();
    },
  });
}

export function useProfile() {
  return useQuery({
    queryKey: QUERY_KEYS.AUTH.PROFILE,
    queryFn: getProfile,
    enabled: !!getAccessToken(),
  });
}
