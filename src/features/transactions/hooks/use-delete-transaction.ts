"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTransaction } from "../api/transactions.api";
import { QUERY_KEYS } from "@/lib";

export const useDeleteTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteTransaction(id),

    onSuccess: (_, id) => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TRANSACTIONS.LIST,
      });

      queryClient.removeQueries({
        queryKey: QUERY_KEYS.TRANSACTIONS.DETAIL(id),
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.DASHBOARD.ALL,
      });
    },
  });
};
