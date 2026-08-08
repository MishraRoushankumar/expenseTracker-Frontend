"use client";

import { QUERY_KEYS } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "../api/dashboard.api";

export const useDashboard = () => {
  return useQuery({
    queryKey: QUERY_KEYS.DASHBOARD.ALL,
    queryFn: getDashboard,

    staleTime: 1000 * 60 * 5,

    retry: 1,

    refetchOnWindowFocus: false,
  });
};
