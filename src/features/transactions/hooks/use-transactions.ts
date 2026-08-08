"use client";

import { useQuery } from "@tanstack/react-query";

import { getTransactions } from "../api/transactions.api";
import type { TransactionQueryParams } from "../types";
import { QUERY_KEYS } from "@/lib";

export const useTransactions = (params?: TransactionQueryParams) => {
  return useQuery({
    queryKey: [...QUERY_KEYS.TRANSACTIONS.LIST, params],
    queryFn: () => getTransactions(params),

    staleTime: 1000 * 60 * 5,

    retry: 1,

    refetchOnWindowFocus: false,
  });
};
