"use client";

import { QUERY_KEYS } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { getTransactionById } from "../api/transactions.api";

export const useTransaction = (id: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.TRANSACTIONS.DETAIL(id),
    queryFn: () => getTransactionById(id),

    staleTime: 1000 * 60 * 5,

    retry: 1,

    refetchOnWindowFocus: false,

    enabled: id > 0,
  });
};
