"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTransaction } from "../api/transactions.api";
import { CreateTransactionRequest } from "../types";
import { QUERY_KEYS } from "@/lib";

export const useCreateTransaction = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTransactionRequest) => createTransaction(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TRANSACTIONS.LIST,
      });

      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.DASHBOARD.ALL,
      });
    },
  });
};
